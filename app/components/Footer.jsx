import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-white ">
      <div className="max-w-10/12 mx-auto py-10">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-5">
            <Image
              // className="w-fit h-13"
              src={"/Layout/Brand/logo-colored.png"}
              width={180}
              height={150}
              alt="hello"
            />
            <p className="text-stone-400 text-lg">
              Best information about company <br />
              goes here but now Lorem ipsum is
            </p>
            <div className="flex gap-4 text-slate-400 text-3xl mt-3">
              <AiFillFacebook />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiFillLinkedin />
              <FaYoutube />
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">About</h4>
            <div className="flex  flex-col text-slate-400 gap-2">
              <p>About Us</p>
              <p>Find Stores</p>
              <p>Categories</p>
              <p>Blogs</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">Partnership</h4>
            <div className="flex  flex-col text-slate-400 gap-2">
              <p>About Us</p>
              <p>Find Stores</p>
              <p>Categories</p>
              <p>Blogs</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">Information</h4>
            <div className="flex  flex-col text-slate-400 gap-2">
              <p>Help center</p>
              <p>Money Refund</p>
              <p>Shippping</p>
              <p>Conatact Us</p>
            </div>
          </div>
          <div className="ml-3">
            <h4 className="text-lg mb-4">For Users</h4>
            <div className="flex  flex-col text-slate-400 gap-2">
              <p>Login</p>
              <p>Register</p>
              <p>Settings</p>
              <p>My Orders</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg mb-4">Get App</h4>
            <div className="flex  flex-col text-slate-400 gap-2">
              <Image
                src={"/Layout/Misc/Group.png"}
                width={0}
                height={0}
                sizes="full"
                className="w-35 h-auto"
                alt="AppButton"
              />
              <Image
                src={"/Layout/Misc/market-button.png"}
                width={0}
                height={0}
                sizes="full"
                className="w-35 h-auto"
                alt="AppButton"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-100 py-4 text-stone-500 text-lg">
        <div className="max-w-10/12 mx-auto flex justify-between">
          <p>2023 Ecommerce.</p>
          <p>English</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
