import Link from "next/link";
const LoginSucess = ({ posts }) => {
  return (
    <div className="sm:mx-60 md:mx-20 lg:mx-60">
      <Link href="/admin/createpost" passHref>
        <button className="btn btn-lg">Create a new post</button>
      </Link>
      {posts.map((value, i) => (
        <div className="card sm:card-side bordered" key={i}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://picsum.photos/id/1005/400/250" alt="nothing" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{value.title}</h2>
            <p>{value.description}</p>
            <div className="card-actions">
              <button className="btn btn-primary">Delete</button>
              <button className="btn btn-ghost">Edit</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginSucess;
