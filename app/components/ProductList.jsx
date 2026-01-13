"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import PriceRange from "./PriceRange";
import { IoGrid } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import ProductCard from "./ProductCard";
import ProductGridCard from "./ProductGridCard";

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
  const [selectedFilters, setSelectedFilters] = useState([]);

  function toggleFilter(type, value) {
    setSelectedFilters((prev) => {
      const exists = prev.find((f) => f.type === type && f.value === value);
      if (exists) {
        return prev.filter((f) => !(f.type === type && f.value === value));
      } else {
        // For radio buttons (single selection per type usually, but user layout uses map implies multiples? actually 'condition' is radio)
        if (type === 'Condition') {
          // If type is condition, remove other conditions first if we want radio behavior in chips?
          // The input is type="radio", so it should act like one.
          const othersRemoved = prev.filter(f => f.type !== 'Condition');
          return [...othersRemoved, { type, value }];
        }
        return [...prev, { type, value }];
      }
    });
  }

  function removeFilter(filterToRemove) {
    setSelectedFilters((prev) =>
      prev.filter(
        (f) => !(f.type === filterToRemove.type && f.value === filterToRemove.value)
      )
    );
    // If we are removing a radio button selection (Condition), we should probably uncheck the radio.
    // But since we drive the checked state by selectedFilters, unchecking it there works.
    // However, standard radio buttons cannot be unchecked by clicking them again, only by clicking another.
    // Removing the chip allows 'unchecking' a radio filter which is a nice feature of this UI pattern.
  }

  function clearAllFilters() {
    setSelectedFilters([]);
  }

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
      <div className="grid grid-cols-[18%_82%] gap-x-6">
        {/* Sidebar */}
        <div className="h-full">
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
                className={`flex flex-col gap-2 mt-2 transition-all ${isCategory ? null : "hidden"
                  }`}
              >
                {categoryList.map((currValue, index) => {
                  return (
                    <p className="text-[#505050] hover:text-blue-600 cursor-pointer transition-colors" key={index}>
                      {currValue}
                    </p>
                  );
                })}
                <p className="text-blue-600 cursor-pointer">See all</p>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center border-t border-t-stone-200 py-3">
                <p className="font-semibold text-lg text-neutral-800">Brands</p>
                <IoIosArrowUp />
              </div>
              <div className="flex flex-col gap-2 mt-2 ">
                {brandsList.map((currValue, index) => {
                  const isChecked = selectedFilters.some(f => f.type === 'Brand' && f.value === currValue);
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4 cursor-pointer"
                        checked={isChecked}
                        onChange={() => toggleFilter('Brand', currValue)}
                      />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600 cursor-pointer">See all</p>
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
                  const isChecked = selectedFilters.some(f => f.type === 'Feature' && f.value === currValue);
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="checkbox"
                        className="size-4 cursor-pointer"
                        checked={isChecked}
                        onChange={() => toggleFilter('Feature', currValue)}
                      />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600 cursor-pointer">See all</p>
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
                {conditionList.map((currValue, index) => { // Fixed: using conditionList instead of featuresList
                  const isChecked = selectedFilters.some(f => f.type === 'Condition' && f.value === currValue);
                  return (
                    <div key={index} className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="condition"
                        className="size-4 cursor-pointer"
                        checked={isChecked}
                        onChange={() => toggleFilter('Condition', currValue)}
                      />
                      <p className="text-[#505050]">{currValue}</p>
                    </div>
                  );
                })}
                <p className="text-blue-600 cursor-pointer">See all</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-5 py-2 bg-white border border-stone-200 rounded-md text-lg">
            <p>
              12,911 items found in{" "}
              <span className="font-semibold">Mobile Accessories</span>
            </p>
            <div className="flex items-center gap-4">
              <div className="space-x-4 flex items-center">
                <input type="checkbox" name="checkbox_verified" id="checkbox_verified" className="cursor-pointer" />
                <label htmlFor="checkbox_verified" className="cursor-pointer">Verified Only</label>
              </div>
              <div className=" flex items-center border rounded-md border-stone-200 h-full py-2 pr-2 outline-none">
                <select className="px-4 py-2 bg-transparent outline-none cursor-pointer" name="" id="">
                  <option value="">Featured</option>
                  <option value="asc">Price: Low to High</option>
                  <option value="desc">Price: High to Low</option>
                </select>
              </div>
              <div className="flex">
                <div
                  onClick={listToGrid}
                  className={`border border-stone-200 p-3 rounded-l-md transition-all cursor-pointer ${gridStyle == "grid"
                    ? "bg-neutral-200 shadow-inner shadow-neutral-700"
                    : "hover:bg-neutral-100"
                    }`}
                >
                  <IoGrid />
                </div>
                <div
                  onClick={gridToList}
                  className={`border border-stone-200 p-3 rounded-r-md transition-all cursor-pointer ${gridStyle == "list"
                    ? "bg-neutral-200 shadow-inner shadow-neutral-700"
                    : "hover:bg-neutral-100"
                    }`}
                >
                  <FaList />
                </div>
              </div>
            </div>
          </div>

          {/* Filter Chips Bar */}
          {selectedFilters.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {selectedFilters.map((filter, index) => (
                <div
                  key={`${filter.type}-${filter.value}-${index}`}
                  className="flex items-center gap-2 px-3 py-1 bg-white border border-blue-300 rounded-md text-stone-600 text-sm shadow-sm transition-all hover:border-blue-500"
                >
                  <span>{filter.value}</span>
                  <button
                    onClick={() => removeFilter(filter)}
                    className="text-stone-400 hover:text-red-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
              <button
                onClick={clearAllFilters}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium ml-2 transition-colors"
              >
                Clear all filter
              </button>
            </div>
          )}

          {/* Product Grid */}
          <div
            className={`${gridStyle === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-4"
              } py-5 border-stone-200 rounded-md`}
          >
            {productsList.map((currValue, index) => {
              return gridStyle === "grid" ? (
                <ProductGridCard objectValue={currValue} key={index} />
              ) : (
                <ProductCard objectValue={currValue} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
