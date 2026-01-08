import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="bg-white">
      <nav className="h-24 flex items-center border-b-2 border-stone-100">
        <div className=" w-10/12 mx-auto flex justify-between items-center grid-[1fr 3fr 2fr]">
          <div>
            <Image
              // className="w-fit h-13"
              src={"/Layout/Brand/logo-colored.png"}
              width={180}
              height={150}
              alt="hello"
            />
          </div>
          <div className="flex w-6/12 ring-2 ring-blue-600 rounded-md">
            <input
              className="border-none inline flex-10 px-3 py-2 focus:outline-none"
              type="text"
              placeholder="Search"
            />
            <div className="flex items-center px-1 border-l border-stone-300">
              <select className="pr-2">
                <option>All Categories</option>
                <option>Product 1</option>
                <option>Product 2</option>
                <option>Product 3</option>
              </select>
            </div>
            <button className="flex flex-2 justify-center items-center cursor-pointer bg-blue-600  text-white font-medium px-4">
              Search
            </button>
          </div>
          <div className="flex gap-6 text-stone-400 text-sm">
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
              <FaUser className="text-2xl" />
              <p>Profile</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
              <MdMessage className="text-2xl" />
              <p>Message</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
              <FaHeart className="text-2xl" />
              <p>Order</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer">
              <IoMdCart className="text-2xl" />
              <p>My Cart</p>
            </div>
          </div>
        </div>
      </nav>
      <div className="w-full shadow-md">
        <div className="flex justify-between max-w-10/12 mx-auto py-4">
          <div className="flex gap-6">
            <div className="flex gap-1">
              <IoMenu className="text-2xl" />
              <p>All Categories</p>
            </div>
            <p>Hot Offers</p>
            <p>Gift Boxes</p>
            <p>Projects</p>
            <p>Menu item</p>
            <select>
              <option>Help</option>
              <option>Help</option>
              <option>Help</option>
            </select>
          </div>
          <div className="flex gap-6">
            <select>
              <option>English, USD</option>
            </select>
            <select>
              <option>Ship to &#x1f1e9;&#x1f1ea;</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
