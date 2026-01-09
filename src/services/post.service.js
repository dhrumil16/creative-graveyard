import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

/* ---------------- CREATE POST ---------------- */
export async function createPost(data) {
  return await addDoc(collection(db, "posts"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}

/* ---------------- PUBLIC POSTS ---------------- */
export async function getPublicPosts() {
  const q = query(
    collection(db, "posts"),
    where("isPublic", "==", true),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* ---------------- USER POSTS ---------------- */
export async function getUserPosts(userId) {
  const q = query(
    collection(db, "posts"),
    where("authorId", "==", userId),
    orderBy("createdAt", "desc")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

/* ---------------- DELETE POST ---------------- */
export async function deletePost(postId) {
  await deleteDoc(doc(db, "posts", postId));
}

/* ---------------- GET SINGLE POST ---------------- */
export async function getPostById(postId) {
  const ref = doc(db, "posts", postId);
  const snap = await getDoc(ref);
  return { id: snap.id, ...snap.data() };
}

/* ---------------- UPDATE POST ---------------- */
export async function updatePost(postId, data) {
  const ref = doc(db, "posts", postId);
  await updateDoc(ref, data);
}
