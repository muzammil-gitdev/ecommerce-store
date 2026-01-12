"use client";
import { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

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

  return (
    <section className="max-w-10/12 mx-auto">
      <div className="grid grid-cols-[18%_82%] grid-rows-[10%_90%] gap-x-6">
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
        <div className="bg-blue-100">This is the search result analytics</div>
        <div className="bg-red-200">This is product List</div>
      </div>
    </section>
  );
}

export default ProductList;
