import { MdKeyboardArrowRight } from "react-icons/md";

function LocationBreadcrum() {
  const locArray = ["Home", "Clothings", "Men's Wear", "Summer Clothing"];
  return (
    <div className="max-w-10/12 mx-auto my-7 text- text-[#8B96A5]">
      <div className="flex">
        {locArray.map((currValue, index, array) => {
          return (
            <div className="flex justify-center items-center" key={index}>
              <p>{currValue}</p>
              {array[index + 1] != null ? (
                <MdKeyboardArrowRight className="text-2xl mr-1" />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationBreadcrum;
