"use client";
import React, { useState } from "react";
import Navbar from "../components/navbar";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FaStar, FaCheck, FaHeart, FaRegHeart, FaGlobe } from "react-icons/fa";
import { MdOutlineMessage, MdShoppingCart, MdVerifiedUser } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function ProductDetails() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("Description");

    const title = searchParams.get("title") || "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle";
    const price = searchParams.get("price") || 98.00;
    const rating = searchParams.get("rating") || 9.3;
    const orders = searchParams.get("orders") || "32 reviews"; // Mocking orders as reviews for UI match
    const imgSrc = searchParams.get("imgSrc") || "/Image/tech/image 32.png"; // Fallback
    const discount = searchParams.get("discount");

    const tabs = ["Description", "Reviews", "Shipping", "About seller"];

    const relatedProducts = [
        { title: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", img: "/Image/tech/phone1.png" }, // Placeholders
        { title: "Smart Watch Series 7", price: "$32.00-$40.00", img: "/Image/tech/smartwatch.png" },
        { title: "Headphones Wireless", price: "$32.00-$40.00", img: "/Image/tech/headphones.png" },
        { title: "Denim Shorts Blue", price: "$32.00-$40.00", img: "/Image/tech/shorts.png" },
        { title: "Electric Kettle Black", price: "$32.00-$40.00", img: "/Image/tech/kettle.png" },
        { title: "Laptop Stand Holder", price: "$32.00-$40.00", img: "/Image/tech/stand.png" },
        // Note: Using placeholders, actual images might differ
    ];

    const youMayLike = [
        { title: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: "/Image/tech/blazer.png" },
        { title: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: "/Image/tech/shirt.png" },
        { title: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: "/Image/tech/watch.png" },
        { title: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: "/Image/tech/socks.png" },
        { title: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", img: "/Image/tech/tshirt.png" },
    ];

    return (
        <div className="bg-stone-50 min-h-screen pb-10">
            <Navbar />

            <div className="max-w-10/12 mx-auto pt-5">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-stone-500 text-sm mb-5">
                    <span>Home</span> <IoIosArrowForward />
                    <span>Clothings</span> <IoIosArrowForward />
                    <span>Men&apos;s wear</span> <IoIosArrowForward />
                    <span className="text-stone-900">Summer clothing</span>
                </div>

                {/* Main Product Card */}
                <div className="bg-white rounded-lg border border-stone-200 p-6 mb-8 shadow-sm">
                    <div className="grid gap-6" style={{ gridTemplateColumns: '280px 1fr 260px' }}>
                        {/* Left: Images */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-stone-200 rounded-lg p-3 h-[320px] flex items-center justify-center bg-white">
                                <Image
                                    src={imgSrc}
                                    width={300}
                                    height={300}
                                    alt={title}
                                    className="object-contain max-h-full"
                                />
                            </div>
                            <div className="flex gap-3 mt-2">
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                                <div className="border border-stone-200 rounded-md p-1.5 cursor-pointer w-14 h-14 hover:border-blue-400 transition-colors"><Image src={imgSrc} width={50} height={50} className="object-cover w-full h-full rounded-sm" alt="thumb" /></div>
                            </div>
                        </div>

                        {/* Middle: Details */}
                        <div className="flex flex-col gap-2 px-4 border-l border-stone-100">
                            <div className="text-green-500 flex items-center gap-1 text-sm font-medium">
                                <FaCheck /> In stock
                            </div>
                            <h1 className="text-xl font-semibold text-stone-900 leading-snug">
                                {title}
                            </h1>
                            <div className="flex items-center gap-2 text-sm text-stone-500">
                                <div className="flex items-center gap-1 text-orange-400">
                                    <div className="flex text-orange-400 text-xs">
                                        <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className="text-stone-300" />
                                    </div>
                                    <span className="font-medium text-orange-500">{rating}</span>
                                </div>
                                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                                <span>32 reviews</span>
                                <div className="w-1 h-1 bg-stone-300 rounded-full"></div>
                                <span>154 sold</span>
                            </div>

                            {/* Price Block */}
                            <div className="bg-[#FFF0DF] px-5 py-4 rounded-lg flex gap-6 my-1">
                                <div className="border-r border-stone-300 pr-8">
                                    <p className="text-xl font-bold text-[#FA3434]">${price}</p>
                                    <p className="text-stone-500 text-xs">50-100 pcs</p>
                                </div>
                                <div className="border-r border-stone-300 pr-8">
                                    <p className="text-xl font-bold text-stone-800">${(Number(price) * 0.9).toFixed(2)}</p>
                                    <p className="text-stone-500 text-xs">100-700 pcs</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold text-stone-800">${(Number(price) * 0.8).toFixed(2)}</p>
                                    <p className="text-stone-500 text-xs">700+ pcs</p>
                                </div>
                            </div>

                            {/* Attributes Table */}
                            <div className="flex flex-col gap-0 text-sm text-stone-600">
                                <div className="grid grid-cols-[140px_1fr] py-3 border-b border-stone-200">
                                    <span className="text-stone-400">Price:</span>
                                    <span className="text-stone-600">Negotiable</span>
                                </div>
                                <div className="flex flex-col py-3 border-b border-stone-200">
                                    <div className="grid grid-cols-[140px_1fr] py-1">
                                        <span className="text-stone-400">Type:</span>
                                        <span className="text-stone-600">Classic shoes</span>
                                    </div>
                                    <div className="grid grid-cols-[140px_1fr] py-1">
                                        <span className="text-stone-400">Material:</span>
                                        <span className="text-stone-600">Plastic material</span>
                                    </div>
                                    <div className="grid grid-cols-[140px_1fr] py-1">
                                        <span className="text-stone-400">Design:</span>
                                        <span className="text-stone-600">Modern nice</span>
                                    </div>
                                </div>
                            </div>

                            {/* Customization */}
                            <div className="flex flex-col gap-0 text-sm text-stone-600 py-3 border-b border-stone-200">
                                <div className="grid grid-cols-[140px_1fr] items-start py-1">
                                    <span className="text-stone-400">Customization:</span>
                                    <span className="text-stone-600">Customized logo and<br />design custom packages</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] py-1">
                                    <span className="text-stone-400">Protection:</span>
                                    <span className="text-stone-600">Refund Policy</span>
                                </div>
                                <div className="grid grid-cols-[140px_1fr] py-1">
                                    <span className="text-stone-400">Warranty:</span>
                                    <span className="text-stone-600">2 years full warranty</span>
                                </div>
                            </div>
                        </div>

                        {/* Right: Supplier */}
                        <div className="flex flex-col gap-4">
                            <div className="border border-stone-200 rounded-lg p-5 shadow-sm px-5 py-5">
                                <div className="flex gap-4 items-center mb-5 border-b border-stone-100 pb-5">
                                    <div className="w-12 h-12 bg-[#C6F3F1] rounded-md flex items-center justify-center text-[#4CA7A7] font-bold text-2xl">
                                        R
                                    </div>
                                    <div>
                                        <p className="font-semibold text-stone-800">Supplier</p>
                                        <p className="text-stone-500 text-sm">Guanjoi Trading LLC</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3 text-stone-500 text-sm mb-5">
                                    <div className="flex gap-2 items-center">
                                        <Image src="/Layout/Flags/DE.png" width={20} height={15} alt="flag" className="object-cover" />
                                        <span>Germany, Berlin</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <MdVerifiedUser className="text-stone-400 text-lg" />
                                        <span>Verified Seller</span>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <FaGlobe className="text-stone-400 text-lg" />
                                        <span>Worldwide shipping</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2.5">
                                    <button className="bg-blue-600 text-white rounded-lg py-2.5 font-medium hover:bg-blue-700 transition-colors">Send inquiry</button>
                                    <button className="bg-white border border-stone-200 text-blue-600 rounded-lg py-2.5 font-medium hover:bg-stone-50 transition-colors">Seller&apos;s profile</button>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 text-blue-600 font-medium cursor-pointer mt-2">
                                <FaRegHeart />
                                <span>Save for later</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-5" style={{ gridTemplateColumns: '1fr 280px' }}>
                    {/* Tabs & Descriptions */}
                    <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-sm h-fit">
                        <div className="flex gap-6 border-b border-stone-200 pb-3 mb-5 text-stone-500 font-medium">
                            {tabs.map(tab => (
                                <div
                                    key={tab}
                                    className={`cursor-pointer pb-2 -mb-2.5 px-2 ${activeTab === tab ? "text-blue-600 border-b-2 border-blue-600" : "hover:text-blue-500"}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </div>
                            ))}
                        </div>
                        <div className="text-stone-600 leading-relaxed text-sm space-y-4">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div className="border border-stone-200 rounded-md overflow-hidden my-4 w-2/3">
                                <table className="w-full text-sm text-stone-600 border-collapse">
                                    <tbody>
                                        <tr className="border-b border-stone-200">
                                            <td className="p-2 border-r border-stone-200 w-1/3 bg-stone-100 text-stone-500">Model</td>
                                            <td className="p-2 bg-white">#8786867</td>
                                        </tr>
                                        <tr className="border-b border-stone-200">
                                            <td className="p-2 border-r border-stone-200 bg-stone-100 text-stone-500">Style</td>
                                            <td className="p-2 bg-white">Classic style</td>
                                        </tr>
                                        <tr className="border-b border-stone-200">
                                            <td className="p-2 border-r border-stone-200 bg-stone-100 text-stone-500">Certificate</td>
                                            <td className="p-2 bg-white">ISO-898921212</td>
                                        </tr>
                                        <tr className="border-b border-stone-200">
                                            <td className="p-2 border-r border-stone-200 bg-stone-100 text-stone-500">Size</td>
                                            <td className="p-2 bg-white">34mm x 450mm x 19mm</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 border-r border-stone-200 bg-stone-100 text-stone-500">Memory</td>
                                            <td className="p-2 bg-white">36GB RAM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <ul className="list-none space-y-2 text-stone-600">
                                <li className="flex items-center gap-2"><FaCheck className="text-stone-400" /> Some great feature name here</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-stone-400" /> Lorem ipsum dolor sit amet, consectetur</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-stone-400" /> Duis aute irure dolor in reprehenderit</li>
                                <li className="flex items-center gap-2"><FaCheck className="text-stone-400" /> Some great feature name here</li>
                            </ul>

                        </div>
                    </div>

                    {/* You May Like Sidebar */}
                    <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-sm h-fit">
                        <h3 className="font-semibold text-stone-800 mb-4">You may like</h3>
                        <div className="flex flex-col gap-4">
                            {youMayLike.map((item, i) => (
                                <div key={i} className="flex gap-3 hover:bg-stone-50 p-1 rounded-md transition-colors cursor-pointer">
                                    <div className="w-16 h-16 border border-stone-200 rounded-md flex-shrink-0 flex items-center justify-center p-1">
                                        <Image src={"/Image/tech/image 32.png"} width={50} height={50} className="object-contain" alt={item.title} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-stone-800 font-medium text-sm line-clamp-2">{item.title}</p>
                                        <p className="text-stone-400 text-sm">{item.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                <div className="bg-white border border-stone-200 rounded-lg p-6 pb-8 mt-5 shadow-sm">
                    <h3 className="font-semibold text-xl text-stone-800 mb-6">Related products</h3>
                    <div className="grid grid-cols-6 gap-5">
                        {relatedProducts.map((prod, i) => (
                            <div key={i} className="flex flex-col gap-2 cursor-pointer group">
                                <div className="bg-stone-50 rounded-md p-4 h-[180px] flex items-center justify-center border border-transparent group-hover:border-stone-200 transition-all">
                                    <Image src={"/Image/tech/image 32.png"} width={100} height={100} className="object-contain mix-blend-multiply" alt={prod.title} />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-stone-700 font-medium text-sm line-clamp-2 group-hover:text-blue-600 transition-colors">{prod.title}</p>
                                    <p className="text-stone-500 text-sm">{prod.price}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* Discount Banner */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl mt-5 px-10 py-8 relative overflow-hidden shadow-lg">
                    <div className="relative z-10 flex justify-between items-center">
                        <div className="text-white">
                            <h2 className="text-2xl font-bold mb-1">Super discount on more than 100 USD</h2>
                            <p className="opacity-80">Have you ever finally just write dummy info</p>
                        </div>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                            Shop now
                        </button>
                    </div>
                    {/* Decorative overlay */}
                    <div className="absolute top-0 right-0 h-full w-1/3 bg-blue-500 transform -skew-x-12 translate-x-10 z-0"></div>
                </div>

            </div>
        </div>
    );
}
