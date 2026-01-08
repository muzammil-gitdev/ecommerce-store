import Image from "next/image";

function DealsAndOffer() {
  const daysAndTime = [
    {
      num: "04",
      unit: "Days",
    },
    {
      num: 13,
      unit: "Hour",
    },
    {
      num: 34,
      unit: "Mins",
    },
    {
      num: 56,
      unit: "Secs",
    },
  ];

  const dealsAndOffers = [
    {
      imgSrc: "/Image/tech/8.png",
      title: "Smart Watches",
      discount: "-25%",
    },
    {
      imgSrc: "/Image/tech/image 34.png",
      title: "Laptops",
      discount: "-25%",
    },
    {
      imgSrc: "/Image/tech/6.png",
      title: "GoPro Cameras",
      discount: "-25%",
    },
    {
      imgSrc: "/Image/tech/image 29.png",
      title: "Headphones",
      discount: "-25%",
    },
    {
      imgSrc: "/Image/tech/image 23.png",
      title: "Mobile Phones",
      discount: "-25%",
    },
  ];

  return (
    <section className="mt-6">
      <div className="max-w-10/12 mx-auto bg-white rounded-md ring ring-stone-200">
        <div className="grid grid-cols-[20%_1fr] bg-white p-6 ">
          <div className="">
            <h2 className="text-[20px] font-semibold">Deals and offers</h2>
            <p className="text-[18px] tracking-wide text-stone-400 mb-4">
              Hygine Equipment
            </p>
            <div className="flex gap-2 mt-2 text-white">
              {daysAndTime.map((currValue, index) => {
                return (
                  <div
                    key={index}
                    className="bg-stone-600 px-2 py-2 rounded-sm"
                  >
                    <p className="flex text-xl tracking-wide leading-5 flex-col font-semibold justify-between items-center">
                      {currValue.num}
                      <br />
                      <span className="text-sm font-normal">
                        {currValue.unit}
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex gap-2 justify-around items-center cursor-pointer ">
            {dealsAndOffers.map((currValue, index) => {
              return (
                <div
                  key={index}
                  className="flex w-full flex-col justify-center items-center gap-2 border-l border-l-stone-300 group"
                >
                  <Image
                    src={currValue.imgSrc}
                    sizes="full"
                    width={100}
                    height={100}
                    alt="headphone"
                    className=" transition-all group-hover:scale-110 group-active:scale-95"
                  />
                  <p>{currValue.title}</p>
                  <p className="rounded-2xl bg-red-100 px-2 text-red-500 font-semibold">
                    {currValue.discount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DealsAndOffer;
