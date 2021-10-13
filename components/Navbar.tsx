import { Popover } from "@headlessui/react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
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
                Home
              </a>
              <a className="cursor-pointer block mx-4 transition duration-500 ease-in-out border-b-2 border-transparent hover:border-gray-900">
                Portfolio
              </a>
              <a className="cursor-pointer block mx-4 transition duration-500 ease-in-out border-b-2 border-transparent hover:border-gray-900">
                Contact
              </a>
              <a className="cursor-pointer block mx-4 transition duration-500 ease-in-out border-b-2 border-transparent hover:border-gray-900">
                About
              </a>
            </div>
          </div>

          <div className="md:hidden block ">
            <Popover className=" dropdown dropdown-end">
              <Popover.Button className="m-1 btn">
                <FaBars />
              </Popover.Button>

              <Popover.Panel className=" shadow menu dropdown-content bg-base-100 rounded-box w-52">
                <ul className="grid grid-cols-1">
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </Popover.Panel>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
