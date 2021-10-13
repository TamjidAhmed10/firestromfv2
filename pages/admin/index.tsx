import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../config/fire";
import LoginSucess from "../../components/LoginSucess";
import { useForm } from "react-hook-form";
import getAllThePosts from "../../functions/getAllThePosts";
import AdminNavbar from "../../components/AdminNavbar";
import Footer from "../../components/Footer";

interface Props {
  posts: any;
}

const Admin: React.FC<Props> = ({ posts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [checkSignedIn, setCheckSignedIn]: any = useState("");
  const auth = getAuth(app);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("Wrong Authentication" + error);
      });
  };

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

  return (
    <div>
      {checkSignedIn ? (
        <>
          <AdminNavbar />
          <LoginSucess posts={posts} />
          {posts.length < 4 ? (
            <div className=" md:absolute md:bottom-0 md:w-full">
              <Footer />
            </div>
          ) : (
            <Footer />
          )}
        </>
      ) : isLoading ? (
        <>
          <div className=" flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500" />
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="p-10 card bg-base-200 w-96">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-xl">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Email Adress"
                  className="input input-info input-bordered"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input input-info input-bordered"
                  {...register("password", { required: true })}
                />
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-active w-24" type="submit">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await getAllThePosts();
  return {
    props: { posts },
  };
}

export default Admin;
