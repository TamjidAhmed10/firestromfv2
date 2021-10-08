import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import app from "../config/fire";
const getasinglepost = async (slug) => {
  try {
    const db = getFirestore(app);
    const q = query(
      collection(db, "posts"),
      where("slug", "==", slug.slug),
      limit(1)
    );
    var posts: DocumentData[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      posts.push(item);
    });
    return posts;
  } catch (error) {
    console.log(error);
  }
};
export default getasinglepost;
