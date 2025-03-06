import hill from "../assets/Best-Hill-Stations-to-Explore-in-India.jpg";

const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row gap-10 md:gap-20 ">
      <div className="relative w-full md:w-[70%] h-[60vh] md:h-screen">
        <img
          src={hill}
          alt="Scenic View"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div className="max-w-2xl text-white text-center md:text-start">
            <h2 className="text-2xl md:text-3xl font-bold uppercase">
              WORLD NEWS
            </h2>
            <span className="bg-white w-full h-[2px] my-5 block"></span>
            <h1 className="text-2xl md:text-4xl font-bold mt-4">
              Amazing places in America to visit.
            </h1>
            <p className="text-base md:text-lg mt-4">
              For some reason — this country, this city, this neighborhood, this
              particular street — is the place you are living a majority of your
              life in.
            </p>
            <button className="mt-6 bg-rose-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-rose-600 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full md:w-[30%]">
        <h1 className="text-2xl md:text-3xl font-bold uppercase w-full text-center md:text-left">
          More News
          <span className="bg-gray-300 h-[2px] block my-5"></span>
        </h1>

        {[1, 2].map((item) => (
          <div key={item} className="my-5 w-full">
            <h2 className="uppercase text-rose-500 font-bold my-2">Travel</h2>
            <h3 className="my-2 font-bold">Article Title</h3>
            <div className="text-gray-500 text-sm">
              <p>Short preview of the article...</p>
              <span className="block mt-1">2 mins ago</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
