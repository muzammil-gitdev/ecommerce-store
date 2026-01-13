import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";

function ProductGridCard({ objectValue }) {
    const { title, price, rating, imgSrc, discount } = objectValue;

    return (
        <Link href={{ pathname: '/productdetails', query: { title, price, rating, imgSrc, discount } }} className="contents">
            <div className="bg-white rounded-lg border border-stone-200 p-4 transition-all hover:shadow-xl hover:translate-y-[-4px] cursor-pointer flex flex-col justify-between h-full group">
                <div className="flex justify-center items-center h-[200px] w-full relative mb-4 bg-transparent rounded-lg">
                    <Image
                        src={imgSrc}
                        width={200}
                        height={200}
                        alt={title}
                        className="object-contain h-full w-full mix-blend-multiply"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between">
                        <div className="flex flex-col">
                            <div className="flex items-baseline gap-2">
                                <p className="font-bold text-lg text-stone-900">${price.toFixed(2)}</p>
                                {discount && (
                                    <p className="text-stone-400 text-sm line-through decoration-stone-400">$1128.00</p>
                                )}
                            </div>
                        </div>

                        <div className="p-2 rounded-full border border-stone-200 text-blue-500 hover:bg-blue-50 transition-colors">
                            <IoMdHeartEmpty size={20} />
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400 text-sm gap-0.5">
                            <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar className="text-stone-300" />
                        </div>
                        <span className="text-orange-400 font-medium text-sm">{rating}</span>
                    </div>

                    <p className="text-stone-600 font-medium text-base leading-snug line-clamp-2">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default ProductGridCard;
