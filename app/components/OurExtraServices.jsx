import Image from "next/image";
import { MdOutlineSearch } from "react-icons/md";

function OurExtraServices() {
  const details = [
    {
      imgSrc: "/Image/backgrounds/Mask group.png",
      description: "Source from Industry hub",
    },
    {
      imgSrc: "/Image/backgrounds/Mask group (1).png",
      description: "Customize your product",
    },
    {
      imgSrc: "/Image/backgrounds/image 106.png",
      description: "Fast, reliable shipping by ocean or air",
    },
    {
      imgSrc: "/Image/backgrounds/image 107.png",
      description: "Product monitoring and inspection",
    },
  ];

  return (
    <section className="mt-8 mb-10">
      <div className="w-10/12 mx-auto">
        <h3 className="text-2xl font-semibold">Our extra service</h3>
        <div className="grid grid-cols-4 mt-4 place-content-between gap-6">
          {details.map((currValue, index) => {
            return (
              <div
                key={index}
                className="rounded-lg border border-stone-300 overflow-hidden bg-white relative"
              >
                <div className="absolute translate-x-70 translate-y-35 text-3xl bg-blue-200 p-4 rounded-full border-2 border-white ">
                  <MdOutlineSearch className="" />
                </div>
                <Image
                  src={currValue.imgSrc}
                  height={0}
                  width={0}
                  sizes="full"
                  alt="backgroundPic"
                  className="w-full h-auto"
                />
                <p className="my-4 text-lg max-w-6/12 ml-6">
                  {currValue.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurExtraServices;
