"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import PriceRange from "./PriceRange";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import ProductCard from "./ProductCard";

function ProductList() {
  const [isCategory, setIsCategory] = useState(true);
  const categoryList = [
    "Mobile Accessory",
    "Electronics",
    "Smartphones",
    "Modern Tech",
  ];
  const brandsList = ["Samsung", "Apple", "Huawei", "Xiaomi", "Lenovo"];
  const featuresList = [
    "Metallic",
    "Plastic",
    "8GB Ram",
    "Super Power",
    "Large Memory",
  ];
  const conditionList = ["Any", "Refurbished", "Brand New", "Old items"];

  function handleCategory() {
    setIsCategory(!isCategory);
    console.log(isCategory);
  }

  const [gridStyle, setGridStyle] = useState("grid");

  function gridToList() {
    setGridStyle("list");
  }
  function listToGrid() {
    setGridStyle("grid");
  }

  const productsList = [
    {
      title: "Apple Iphone 12, RED, 256 GB",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/image 33.png",
      discount: true,
    },
    {
      title: "Xiaomi Tab 7, 8GB, Metallic",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/image 32.png",
      discount: false,
    },
    {
      title: "Macbook 16 Inch, 500GB SSD",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/image 34.png",
      discount: true,
    },
    {
      title: "Electric Kettle, Black",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/image 85.png",
      discount: true,
    },
    {
      title: "Baseus headphone, Wireless, White",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/image 86.png",
      discount: false,
    },
    {
      title: "Canon Camera 500D",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/6.png",
      discount: false,
    },
    {
      title: "Apple Watch 6, Retina Display, Calling Option",
      price: 998,
      rating: 7.5,
      orders: 154,
      imgSrc: "/Image/tech/8.png",
      discount: false,
    },
  ];

  return (
    <section className="max-w-10/12 mx-auto">
      <div className="grid grid-cols-[18%_82%] grid-rows-[4.5%_1fr] gap-x-6">
        <div className="row-span-2 ">
          <div className="flex flex-col gap-5">
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">
                  Category
                </p>
                <div className="hover:cursor-pointer" onClick={handleCategory}>
                  <IoIosArrowUp />
                </div>
              </div>
              <div
                className={`flex flex-col gap-2 mt-2 transition-all ${
                  isCategory ? null : "hidden"
                }`}
              >
                {categoryList.map((currValue, index) => {
                  return (
                    <p className="text-[#505050]" key={index}>
                      {currValue}
                    </p>
                  );
                })}
                <p className="text-blue-600">See all</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">Brands</p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col gap-2 mt-2 ">
                {brandsList.map((currValue, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input type="checkbox" className="size-4" />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600">See all</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">
                  Features
                </p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col gap-2 mt-2 ">
                {featuresList.map((currValue, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input type="checkbox" className="size-4" />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600">See all</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">
                  Price Range
                </p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col gap-2 mt-2 ">
                <PriceRange />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">
                  Condition
                </p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col gap-2 mt-2 ">
                {featuresList.map((currValue, index) => {
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input type="radio" name="condition" className="size-4" />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600">See all</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between px-5 bg-white border border-stone-200 rounded-md text-lg">
          <p>
            12,911 items found in{" "}
            <span className="font-semibold">Mobile Accessories</span>
          </p>
          <div className="flex items-center gap-4">
            <div className="space-x-4">
              <input type="checkbox" name="checkbox_verified" id="" />
              <label htmlFor="checkbox_verified">Verified Only</label>
            </div>
            <div className=" flex items-center border rounded-md border-stone-200 h-full py-4 pr-4 outline-none">
              <select className="px-4" name="" id="">
                <option value="">Featured</option>
              </select>
            </div>
            <div className="flex">
              <div
                onClick={listToGrid}
                className={`border border-stone-200 p-4 rounded-l-md transition-all ${
                  gridStyle == "grid"
                    ? "bg-neutral-200 shadow-inner shadow-neutral-700"
                    : null
                }`}
              >
                <IoGrid />
              </div>
              <div
                onClick={gridToList}
                className={`border border-stone-200 p-4 rounded-r-md transition-all ${
                  gridStyle == "list"
                    ? "bg-neutral-200 shadow-inner shadow-neutral-700"
                    : null
                }`}
              >
                <FaList />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 border-stone-200 rounded-md space-y-4">
          {productsList.map((currValue, index) => {
            return <ProductCard objectValue={currValue} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductList;
