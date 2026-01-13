import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

function ProductCard({ objectValue }) {
  const { title, price, rating, orders, imgSrc, discount } = objectValue;
  return (
    <div className="bg-white rounded-md border border-stone-200 transition-all hover:scale-101 hover:shadow-2xl cursor-pointer">
      <div className=" flex gap-7 h-full py-5 items-center">
        <Image
          src={imgSrc}
          width={200}
          height={200}
          alt="product image"
          className=" ml-8 object-contain"
        />
        <div className="flex flex-col gap-3 h-full justify-between ">
          <p className="text-xl">{title}</p>
          <div className="flex flex-col gap-1">
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-2xl">${price}</p>
              <p className="text-neutral-400 line-through">
                {discount ? "$1128" : null}
              </p>
            </div>
            <div className="flex gap-4 text-lg">
              <div className="flex items-center text-xl gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-neutral-300" />
                <p className="text-yellow-500 ml-1">7.5</p>
              </div>
              <p className="text-neutral-400">154 orders</p>
              <p className="text-green-500">Free Shopping</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <p className="max-w-[86%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              doeiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <Link className="text-blue-500" href={"#"}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
