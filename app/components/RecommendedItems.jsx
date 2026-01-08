import Image from "next/image";

function RecommendedItems() {
  const details = [
    {
      imgSrc: "/Layout/alibaba/Image/cloth/Bitmap.png",
      price: 10.3,
      description: "T-shirts with multiple colors, for men",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/2 1.png",
      price: 10.3,
      description: "Jeans Shorts for men, blue color",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/image 30.png",
      price: 10.3,
      description: "Brown winter coat medium size",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/image 24.png",
      price: 10.3,
      description: "Jeans bag for travel for men",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/image 26.png",
      price: 10.3,
      description: "Leather Wallet",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/Bitmap (2).png",
      price: 10.3,
      description: "Canon Camera black 100x zoom",
    },
    {
      imgSrc: "/Layout/alibaba/Image/tech/image 86.png",
      price: 10.3,
      description: "Headset for gaming with mic",
    },
    {
      imgSrc: "/Layout/alibaba/Image/cloth/image 26.png",
      price: 10.3,
      description: "Smart Watch Silver color modern",
    },
    {
      imgSrc: "/Layout/alibaba/Image/interior/image 90.png",
      price: 10.3,
      description: "Blue Wallet for men",
    },
    {
      imgSrc: "/Layout/alibaba/Image/tech/image 85.png",
      price: 10.3,
      description: "Jeans bag for travel for men",
    },
  ];
  return (
    <section className="mt-10">
      <div className="w-10/12 mx-auto">
        <h4 className="text-2xl font-semibold">Recommended Items</h4>
        <div className="grid grid-cols-5 gap-6 mt-6 ">
          {details.map((currValue, index) => {
            return (
              <div
                key={index}
                className="flex flex-col py-4 px-4 border border-stone-300 bg-white hover:scale-105 transition-all hover:shadow-xl cursor-pointer"
              >
                <Image
                  src={currValue.imgSrc}
                  sizes="full"
                  width={0}
                  height={0}
                  alt="productImage"
                  className="h-30 w-auto mb-6 self-center flex-4"
                />
                <p className="font-semibold text-lg mb-1">${currValue.price}</p>
                <p className="text-stone-400">{currValue.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecommendedItems;
