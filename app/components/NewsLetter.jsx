function NewsLetter() {
  return (
    <section className="bg-slate-100 mt-10 py-10">
      <div className="flex flex-col justify-center items-center gap-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">
            Subscribe to our newsletter
          </h3>
          <p className="text-stone-400">
            Get daily news on upcoming offers from many suppliers all over the
            world
          </p>
        </div>
        <div className="flex gap-6">
          <input
            className="px-2 py-1 border bg-white border-stone-300 rounded-md w-80"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
