import Link from "next/link";
const LoginSucess = ({ posts }) => {
  return (
    <div>
      <Link href="/admin/createpost" passHref>
        <button className="btn btn-lg">Create a new post</button>
      </Link>

      <div className="card lg:card-side bordered">
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://picsum.photos/id/1005/400/250" alt="nothing" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Horizontal</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus veritatis sed molestiae voluptates incidunt iure
            sapiente.
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Delete</button>
            <button className="btn btn-ghost">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSucess;
