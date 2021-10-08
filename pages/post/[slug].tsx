import { DocumentData } from "firebase/firestore";
import getasinglepost from "../../functions/getasinglepost";
interface PostProps {
  posts: DocumentData[];
}
const Posts: React.FC<PostProps> = ({ posts }) => {
  return (
    <div className="prose mx-auto">
      <div dangerouslySetInnerHTML={{ __html: posts[0].html }}></div>
    </div>
  );
};
export const getServerSideProps = async (context: { params: any }) => {
  const slug = context.params;
  const posts = await getasinglepost(slug);
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
