import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendEmailVerification,
  signOut,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "./firebase";

const googleProvider = new GoogleAuthProvider();

/* =========================
   EMAIL SIGNUP
========================= */
export const signupWithEmail = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }

  const res = await createUserWithEmailAndPassword(auth, email, password);

  // Send verification mail
  await sendEmailVerification(res.user);

  // Create Firestore user
  await setDoc(doc(db, "users", res.user.uid), {
    uid: res.user.uid,
    name,
    email,
    provider: "email",
    createdAt: serverTimestamp(),
  });

  return res.user;
};

/* =========================
   EMAIL LOGIN (VERIFICATION REQUIRED)
========================= */
export const loginWithEmail = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const res = await signInWithEmailAndPassword(auth, email, password);

  // 🔴 IMPORTANT: refresh user to get updated verification state
  await res.user.reload();

  if (!res.user.emailVerified) {
    await signOut(auth);
    throw new Error("Please verify your email before logging in.");
  }

  // Store Firebase token
  const token = await res.user.getIdToken();
  localStorage.setItem("cg_token", token);

  return res.user;
};

/* =========================
   GOOGLE LOGIN / SIGNUP (AUTO)
========================= */
export const loginWithGoogle = async () => {
  const res = await signInWithPopup(auth, googleProvider);
  const user = res.user;

  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  // Auto-create Firestore user if first time
  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName || "",
      email: user.email || "",
      photoURL: user.photoURL || "",
      provider: "google",
      createdAt: serverTimestamp(),
    });
  }

  const token = await user.getIdToken();
  localStorage.setItem("cg_token", token);

  return user;
};

/* =========================
   LOGOUT
========================= */
export const logoutUser = async () => {
  localStorage.removeItem("cg_token");
  await signOut(auth);
};
