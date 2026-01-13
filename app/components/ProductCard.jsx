import Image from "next/image";
import Link from "next/link";

function ProductCard() {
  return (
    <div className="bg-white rounded-md border border-stone-200 px-3 py-5">
      <div className=" flex gap-7 ">
        <Image
          src={"/Image/tech/image 32.png"}
          sizes="full"
          width={0}
          height={0}
          alt="product image"
          className=" ml-8 h-full w-auto object-contain"
        />
        <div className="flex flex-col gap-3 max-w-[75%]">
          <p className="text-[20px]">Apple Iphone 12, RED, 256GB</p>
          <div>
            <div className="flex gap-3 items-center">
              <p className="font-semibold text-2xl">$998</p>
              <p className="text-neutral-400 line-through">$1128.0</p>
            </div>
            <div className="flex gap-4 text-lg">
              <p className="text-yellow-500">7.5</p>
              <p className="text-neutral-400">154 orders</p>
              <p className="text-green-500">Free Shopping</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
              hic aliquid. Similique accusamus eius hic voluptatem a, enim
              dolores odio nihil veritatis non! Sunt perspiciatis, quibusdam
              pariatur inventore sed repellat.
            </p>
            <Link className="text-blue-500" href={"#"}>
              View Details
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProductCard;
