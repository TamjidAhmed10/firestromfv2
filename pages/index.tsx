import BlogSection from "../components/BlogSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import getAllThePosts from "../functions/getAllThePosts";
const Home = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <BlogSection posts={posts} />
      <Footer />
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
