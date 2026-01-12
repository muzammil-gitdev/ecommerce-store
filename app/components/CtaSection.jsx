import Image from "next/image";

function CtaSection() {
  return (
    <section className="mt-6">
      <div className="max-w-10/12 mx-auto bg-[url('/Image/backgrounds/bgCta.png')] bg-center bg-cover rounded-md">
        <div className="grid grid-cols-[60%_40%] px-10 py-12">
          <div className="text-white max-w-7/12">
            <p className="text-4xl font-semibold mb-7">
              An Easy Way to send <br />
              request to all suppliers
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              quasi sequi accusantium autem totam necessitatibus.
            </p>
          </div>
          <div className="">
            <div className="flex flex-col gap-5 rounded-md bg-white px-6 py-8">
              <p className="text-3xl font-semibold">Send Quote to supplier</p>
              <p className="w-full px-2 py-2 border rounded-md border-stone-300">
                What Items You Need?
              </p>
              <textarea
                className="focus:outline-none border border-stone-300 w-full p-2 rounded-md resize-none"
                rows="3"
                placeholder="Type More Details"
              />
              <div className="grid grid-cols-2 gap-x-4">
                <input
                  className="border rounded-md border-stone-300 p-2 focus:outline-blue-500"
                  type="text"
                  placeholder="Quantity"
                />
                <input
                  className="border rounded-md border-stone-300 p-2"
                  type="number"
                  placeholder="Pcs"
                />
              </div>
              <button className="bg-blue-600 text-white px-5 py-3 rounded-md self-start">
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
