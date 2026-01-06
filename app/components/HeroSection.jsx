import Image from "next/image";

function HeroSection() {
  const categories = [
    {
      title: "Automobile",
      active: true,
    },
    {
      title: "Clothes and wear",
      active: false,
    },
    {
      title: "Home interior",
      active: false,
    },
    {
      title: "Computer and tech",
      active: false,
    },
    {
      title: "Tools and equiment",
      active: false,
    },
    {
      title: "Sports and outdoor",
      active: false,
    },
    {
      title: "Animal and pets",
      active: false,
    },
    {
      title: "Machinery tools",
      active: false,
    },
    {
      title: "More Categories",
      active: false,
    },
  ];
  return (
    <section className="mt-6">
      <div className="max-w-10/12 mx-auto bg-white rounded-md px-1 py-6 ring ring-stone-200">
        <div className="grid grid-cols-[1fr_3fr_1fr]">
          <div className="flex flex-col px-4 justify-between">
            {categories.map((currValue, index) => {
              return (
                <p
                  key={index}
                  className={`text-[16px] px-2 py-2 rounded-md ${
                    currValue.active ? "bg-blue-100" : ""
                  }`}
                >
                  {currValue.title}
                </p>
              );
            })}
          </div>
          <div className="bg-amber-400 flex justify-center items-center">
            <Image
              src={"/Image/backgrounds/hero-section-banner.png"}
              sizes="full"
              width={0}
              height={0}
              className="h-95 w-full object-cover"
              alt="background"
            />
          </div>
          <div className="flex flex-col justify-between px-4">
            <div className="bg-blue-100 px-4 py-4 rounded-md flex flex-col gap-2">
              <div>
                <p>
                  Hi, user <br />
                  let's get started
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
