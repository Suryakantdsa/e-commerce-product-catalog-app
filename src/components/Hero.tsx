const Hero = () => {
  return (
    <div className="sm:px-28 md:44 w-[380px] sm:w-full px-4 mt-20  ">
      <div className="   bg-[#ECC66B] h-[200px] md:h-[220px] lg:h-[250px] mt-4 flex justify-center items-center rounded-xl">
        <div className=" px-16 w-full lg:w-1/2 h-full flex justify-center items-start lg:items-start flex-col ">
          <h1 className=" text-2xl lg:text-4xl text-start font-bold">
            Grab Upto 50% off on all selected product
          </h1>
          <button className=" mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-slate-900">
            Buy now
          </button>
        </div>

        <div className="w-1/2 h-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmwlMjB3ZWFyJTIwaGVhZHBob25lfGVufDB8fDB8fHwwY"
            alt="heroimage"
            className="w-full h-full rounded-xl "
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
