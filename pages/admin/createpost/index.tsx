import { useForm, SubmitHandler } from "react-hook-form";
import { CKEditor } from "ckeditor4-react";
import { useState } from "react";
import app from "../../../config/fire";
import Alert from "../../../components/Alert";
import { collection, addDoc, getFirestore } from "firebase/firestore";
interface Inputs {
  slug: string;
  title: string;
  description: string;
  html: string;
  feature_image: string;
  feature_image_alt: string;
  feature_image_alt_caption: string;
  catagory: string;
}
interface Props {}
const CreatePost: React.FC<Props> = () => {
  const [ckEditorData, setckEditorData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    data["html"] = ckEditorData;
    const db = getFirestore(app);

    try {
        const docRef = await addDoc(collection(db, "posts"), data);
        
        console.log("Document written with ID: ", docRef.id);
        <Alert message="Success Fully logged" />
      reset();
    } catch (e) {
        console.error("Error adding document: ", e);
        <Alert message="Unsuccess Oparation" />;
      reset();
    }
  };
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
          <div className="mt-4">
            <p>Enter Your Blog Content Here</p>
            <CKEditor
              onChange={(event) => {
                setckEditorData(event.editor.getData());
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
