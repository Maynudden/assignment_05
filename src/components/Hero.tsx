import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 items-center gap-10">

        <div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">

            Build Your Ideal

            <br />

            <span className="
              bg-gradient-to-r 
              from-orange-500 
              via-pink-500 
              to-violet-500
              bg-clip-text
              text-transparent
            ">
              Development Stack
            </span>

          </h1>


          <p className="mt-6 text-gray-500 max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and build the stack that fits your
            next project.
          </p>


          <div className="mt-8 flex gap-4">

            <button
              className="
              px-6 py-3
              rounded-lg
              text-white
              bg-gradient-to-r
              from-orange-500
              via-pink-500
              to-violet-500
              "
            >
              Explore Technologies
            </button>


            <button
              className="
              px-6 py-3
              rounded-lg
              border
              border-gray-300
              text-gray-700
              "
            >
              Learn More
            </button>

          </div>

        </div>


        <div className="flex justify-center">

          <img
            src={banner}
            alt="Development Stack"
            className="w-[360px] md:w-[420px]"
          />

        </div>

      </div>

    </section>
  );
};


export default Hero;