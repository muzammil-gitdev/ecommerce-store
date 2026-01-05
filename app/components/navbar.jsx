export default function Navbar() {
  return (
    <nav className="px-3 h-24 flex items-center shadow-sm">
      <div className="w-10/12 mx-auto flex justify-between items-center grid-[1fr 3fr 2fr]">
        <div>
          <h1 className="text-3xl font-bold text-blue-400">Brand</h1>
        </div>
        <div className="flex w-6/12 ring-2 ring-blue-500 rounded-md">
          <input
            className="border-none inline flex-10 px-3 py-2 focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <div className="flex items-center px-1 border-l border-stone-300 ">
            <select className="pr-2">
              <option>Select a product</option>
              <option>Product 1</option>
              <option>Product 2</option>
              <option>Product 3</option>
            </select>
          </div>
          <button className="flex flex-2 justify-center items-center cursor-pointer bg-blue-600">
            Search
          </button>
        </div>
        <div className="flex gap-2">
          <h1>Profile</h1>
          <h1>Message</h1>
          <h1>Order</h1>
          <h1>My Cart</h1>
        </div>
      </div>
    </nav>
  );
}
