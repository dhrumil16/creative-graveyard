import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

/* CREATE USER DOCUMENT IF NOT EXISTS */
export async function createUserIfNotExists(firebaseUser) {
  const userRef = doc(db, "users", firebaseUser.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      uid: firebaseUser.uid,
      name: firebaseUser.displayName || "Anonymous",
      email: firebaseUser.email || null,
      role: "user",
      isAnonymous: firebaseUser.isAnonymous,
      createdAt: serverTimestamp(),
    });
  }
}

/* GET USER ROLE */
export async function getUserRole(uid) {
  const userRef = doc(db, "users", uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) return "user";
  return snap.data().role;
}
