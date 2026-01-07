"use client";
import Image from "next/image";
import { useState } from "react";

function HeroSection() {
  const [active, setActive] = useState(0);
  const categories = [
    {
      title: "Automobile",
    },
    {
      title: "Clothes and wear",
    },
    {
      title: "Home interior",
    },
    {
      title: "Computer and tech",
    },
    {
      title: "Tools and equiment",
    },
    {
      title: "Sports and outdoor",
    },
    {
      title: "Animal and pets",
    },
    {
      title: "Machinery tools",
    },
    {
      title: "More Categories",
    },
  ];
  function handleActive(index) {
    setActive(index);
  }
  return (
    <section className="mt-6">
      <div className="max-w-10/12 mx-auto bg-white rounded-md px-1 py-6 ring ring-stone-200">
        <div className="grid grid-cols-[1fr_3fr_1fr]">
          <div className="flex flex-col px-4 justify-between">
            {categories.map((currValue, index) => {
              return (
                <p
                  onClick={() => handleActive(index)}
                  key={index}
                  className={`text-[16px] px-2 py-2 rounded-md cursor-pointer ${
                    active == index ? "bg-blue-100" : ""
                  }`}
                >
                  {currValue.title}
                </p>
              );
            })}
          </div>
          <div className="relative flex justify-center items-center">
            <Image
              src={"/Image/backgrounds/hero-section-banner.png"}
              sizes="full"
              width={0}
              height={0}
              className="h-95 w-full object-cover"
              alt="background"
            />
            <div className="absolute top-10 left-10 ">
              <p className="text-3xl mb-5">
                Learn trending <br />
                <span className="font-bold">Electronic items</span>
              </p>
              <button className="bg-white px-4 py-2 text-xl rounded-md">
                Learn more
              </button>
            </div>
          </div>
          <div className="flex flex-col justify-between px-4 leading-snug">
            <div className="bg-blue-100 px-4 py-4 rounded-md flex flex-col gap-2">
              <div>
                <p>
                  Hi, user <br />
                  let&apos;s get started
                </p>
              </div>
              <button className="bg-blue-500 px-4 py-1 w-full rounded-md text-white">
                Join Now
              </button>
              <button className="bg-white px-4 py-1 w-full rounded-md text-blue-600">
                Log in
              </button>
            </div>
            <div className="bg-amber-500 rounded-md px-4 py-4">
              <p className="text-white">
                Get US $10 off <br />
                wit a new <br />
                supplier
              </p>
            </div>
            <div className="p-4 bg-teal-400 rounded-md text-white">
              <p>
                Send quotes with <br />
                supplier <br />
                preferences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
