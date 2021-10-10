import BlogSection from "../components/BlogSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getAllThePosts from "../functions/getAllThePosts";
const Home = ({ posts }) => {
  if (posts.length === 0) {
    return <div>No Posts Yet</div>;
  }
  return (
    <div>
      <Navbar />
      <BlogSection posts={posts} />
      {posts.length < 4 ? (
        <div className=" md:absolute md:bottom-0 md:w-full">
          <Footer />
        </div>
      ) : (
        <Footer />
      )}
    </div>
  );
};
export const getStaticProps = async () => {
  const posts = await getAllThePosts();

  return {
    props: { posts },
  };
};

export default Home;
