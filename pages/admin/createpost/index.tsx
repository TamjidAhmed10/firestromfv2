import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import app from "../../../config/fire";
import { useRouter } from "next/router";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
interface Inputs {
  slug: string;
  title: string;
  description: string;
  html: string;
  feature_image: string;
  feature_image_alt: string;
  feature_image_alt_caption: string;
  catagory: string;
  author: string;
}
interface Props {}
const CreatePost: React.FC<Props> = () => {
  const editorRef = useRef(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [checkSignedIn, setCheckSignedIn]: any = useState("");
  const auth = getAuth(app);
  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckSignedIn(user);
        console.log("user", user);
      } else {
        setCheckSignedIn("");
        console.log("not signed in");
      }
      setIsLoading(false);
    });
  }, [auth]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const logdata = editorRef.current.getContent();

      const utcDate1 = new Date();
      const utcDate = utcDate1.toUTCString().slice(5, 16);
      data["published_date"] = utcDate;
      data["html"] = logdata;
      console.log(logdata);
      const db = getFirestore(app);

      const docRef = await addDoc(collection(db, "posts"), data);

      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
      reset();
    }
  };

  if (isLoading) {
    return (
      <div>
        <div className=" flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
        </div>
      </div>
    );
  }
  if (checkSignedIn == "") {
    router.push("/admin");
    return (
      <div>
        <div className=" flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="custom-width mx-auto">
        <h2 className="text-3xl">User Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Unique Slug</span>
            </label>
            <input
              type="text"
              placeholder="Enter a Slug Name"
              className="input input-primary input-bordered"
              {...register("slug", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter A Title Name"
              className="input input-primary input-bordered"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Small Description</span>
            </label>
            <input
              type="text"
              placeholder="Small Description within 54 Characters"
              className="input input-primary input-bordered"
              {...register("description", { required: true, maxLength: 54 })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Author </span>
            </label>
            <input
              type="text"
              placeholder="Author Name"
              className="input input-primary input-bordered"
              {...register("author", { required: true })}
            />
          </div>
          <div className="mt-4">
            <p>Enter Your Blog Content Here</p>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
              onInit={(evt, editor) => (editorRef.current = editor)}
              init={{
                height: 600,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo |fullscreen formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent image indent | " +
                  "removeformat | help",
                image_caption: true,
              }}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Feature Image Link for the post
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter A Title Name"
              className="input input-primary input-bordered"
              {...register("feature_image", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Feature Image Alt Text for the post
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter A Title Name"
              className="input input-primary input-bordered"
              {...register("feature_image_alt", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Feature Image Caption Text for the post
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter A Title Name"
              className="input input-primary input-bordered"
              {...register("feature_image_alt_caption", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Catagory</span>
            </label>
            <input
              type="text"
              placeholder="Enter A Catagory"
              className="input input-primary input-bordered"
              {...register("catagory", { required: true })}
            />
          </div>

          <div className="mt-2"></div>
          <button type="submit" className="btn btn-outline btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
