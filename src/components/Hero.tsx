const Hero = () => {
  return (
    <header
      className={`w-full h-[400px] sm:w-[90%] lg:w-[80%] flex items-center justify-center mx-auto mt-20 rounded-2xl shadow-xl bg-cover bg-center bg-black`}
    >
      <div className="flex flex-col gap-2 text-center bg-transparent">
        <h1 className="text-4xl">Glow Different, Feel Beautiful Inside Out</h1>
        <p>
          Whether it’s a bold new look or a gentle refresh, <br /> we’re here to
          make you feel confident, radiant, and simply beautiful.
        </p>
        <div className="flex items-center gap-4 mt-5 mx-auto">
          <button className="btn btn-secondary rounded-full">
            Book Your Appointment
          </button>
          <button className="btn btn-ghost rounded-full">
            Explore our Services
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
