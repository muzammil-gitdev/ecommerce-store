import Image from "next/image";

function HomeAndOutdoor() {
  const details = [
    {
      title: "Soft Chairs",
      imgSrc: "/Image/interior/1.SoftChairs.png",
      price: "USD 19",
    },
    {
      title: "Sofa and Chair",
      imgSrc: "/Image/interior/2.SofaAndChair.png",
      price: "USD 19",
    },
    {
      title: "Kitchen Dishes",
      imgSrc: "/Image/interior/3.KitchenDishes.png",
      price: "USD 19",
    },
    {
      title: "Smart Watches",
      imgSrc: "/Image/interior/4.SmartWatches.png",
      price: "USD 19",
    },
    {
      title: "KitchenMixer",
      imgSrc: "/Image/interior/5.KitchenMixer.png",
      price: "USD 19",
    },
    {
      title: "Blenders",
      imgSrc: "/Image/interior/6.Blenders.png",
      price: "USD 19",
    },
    {
      title: "Home Appliance",
      imgSrc: "/Image/interior/7.HomeAppliance.png",
      price: "USD 19",
    },
    {
      title: "Coffee Maker",
      imgSrc: "/Image/interior/8.CoffeeMaker.png",
      price: "USD 19",
    },
  ];

  return (
    <section className="mt-6">
      <div className="max-w-10/12 mx-auto bg-white rounded-md ring ring-stone-200">
        <div className="grid grid-cols-[21%_1fr] bg-white">
          <div className="relative">
            <Image
              src={"/Image/backgrounds/bgHomeAndOutdoor.png"}
              sizes="full"
              width={0}
              height={0}
              className="w-full h-fit"
              alt="background"
            />
            <div className="absolute top-6 left-6">
              <h2 className="text-2xl mb-4 font-semibold">
                Home and <br />
                outdoor
              </h2>
              <button className="bg-white rounded-md px-6 py-2 font-semibold">
                Source now
              </button>
            </div>
          </div>
          {/* Second GRID LANDES */}
          <div className="grid grid-cols-4">
            {details.map((currValue, index) => {
              return (
                <div
                  key={index}
                  className="relative pl-4 pt-6 border border-stone-200 group cursor-pointer"
                >
                  <h3 className="mb-2">{currValue.title}</h3>
                  <p className="text-sm text-stone-400 leading-4">
                    From <br /> <span>{currValue.price}</span>
                  </p>
                  <Image
                    src={currValue.imgSrc}
                    height={100}
                    width={100}
                    sizes="full"
                    className="absolute bottom-2 right-3 group-hover:scale-120 transition-all group-active:scale-95"
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAndOutdoor;
