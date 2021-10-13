const AdminNavbar = () => {
  return (
    <div>
      <div>
        <div className="navbar mb-2 shadow-sm bg-gray-100 text-gray-800">
          <div className="flex-1 px-2 mx-2 md:ml-28">
            <span className="text-lg font-bold">Memoir</span>
          </div>
          <div className="flex-none hidden md:flex md:mr-28">
            <div className="flex items-stretch">
              <a className="cursor-pointer block mx-4 border-b-2 border-black">
                Admin Panel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
