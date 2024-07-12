const Hero = () => {
  return (
    <section className=" h-52 lg:mt-28 md:mt-28 mt-24 flex justify-center bg-cover bg-center text-black">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
          ELSONDOSY SHIPYARD
        </h1>
        <p className="text-sm md:text-xl  mb-8">
          Founded in 1980 Specialized in marine works, yacht building, all
          marine maintenance.
        </p>
        <a
          href="#"
          className="bg-blue-400 hover:bg-blue-500 text-white py-3 px-6 rounded-lg text-lg md:text-xl"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
