import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import app from "../config/fire";
const getAllThePosts = async () => {
  try {
    const db = getFirestore(app);
    const querySnapshot = await getDocs(collection(db, "posts"));
    var items: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      let item = doc.data();
      items.push(item);
    });
    return items;
  } catch (error) {
    console.log(error);
  }
};
export default getAllThePosts;
