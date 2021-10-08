import Image from "next/image";
const BlogSection = ({ posts }) => {
  return (
    <>
      <div className=" md:mx-36">
        <div className="grid grid-cols-1 md:grid-cols-3	 gap-4">
          {posts.map((value, i) => (
            <div className="card bordered" key={i}>
              <figure>
                {/*  eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1632967784251-0ac855afdd91?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
                  alt="blog"
                  className="object-cover h-64 w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{value.title}</h2>
                <p>{value.description}</p>
                <div className="card-actions">
                  <div className="badge badge-ghost">Article</div>
                  <div className="badge badge-ghost">Photography</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
