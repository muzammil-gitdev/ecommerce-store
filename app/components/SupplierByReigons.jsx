import Image from "next/image";

function SupplierByReigons() {
  const details = [
    {
      imgSrc: "/Layout1/Image/flags/AE@2x.png",
      title: "Arab Emirates",
      website: "shopname.ae",
    },
    {
      imgSrc: "/Layout1/Image/flags/icon.png",
      title: "Australia",
      website: "shopname.ae",
    },
    {
      imgSrc: "/Layout1/Image/flags/US@2x.png",
      title: "United States",
      website: "shopname.ae",
    },
    {
      imgSrc: "/Layout1/Image/flags/RU@2x.png",
      title: "Russia",
      website: "shopname.ru",
    },
    {
      imgSrc: "/Layout1/Image/flags/IT@2x.png",
      title: "Italy",
      website: "shopname.it",
    },
    {
      imgSrc: "/Layout1/Image/flags/DE@2x.png",
      title: "Denmark",
      website: "shopname.com.dk",
    },
    {
      imgSrc: "/Layout1/Image/flags/FR@2x.png",
      title: "France",
      website: "shopname.com.fr",
    },
    {
      imgSrc: "/Layout1/Image/flags/AE@2x.png",
      title: "Arab Emirates",
      website: "shopname.ae",
    },
    {
      imgSrc: "/Layout1/Image/flags/CN@2x.png",
      title: "Chine",
      website: "shopname.ae",
    },
    {
      imgSrc: "/Layout1/Image/flags/GB@2x.png",
      title: "Great Britain",
      website: "shopname.co.uk",
    },
  ];
  return (
    <section className="mt-10">
      <div className="max-w-10/12 mx-auto">
        <div>
          <h3 className="text-2xl font-semibold">Supplier by reigon</h3>
          <div className="mt-9 grid grid-cols-5 gap-y-4">
            {details.map((currValue, index) => {
              return (
                <div key={index} className="flex gap-1 items-center ">
                  <Image
                    src={currValue.imgSrc}
                    width={0}
                    height={0}
                    sizes="full"
                    alt="flagPic"
                    className="h-[60%] w-fit"
                  />
                  <p className="text-lg leading-5 ml-2">
                    {currValue.title} <br />
                    <span className="text-stone-400">{currValue.website}</span>
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

export default SupplierByReigons;
