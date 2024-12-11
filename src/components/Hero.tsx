const Hero = () => {
  return (
    <div className="w-full">
      <div className="mx-44 bg-[#ECC66B] h-[250px] mt-4 flex justify-center items-center rounded-xl">
        <div className="w-1/2 h-full flex justify-center items-start flex-col px-16">
          <h1 className="text-4xl text-start  font-bold">
            Grab Upto 50% off on all selected product
          </h1>
          <button className=" mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-slate-900">
            Buy now
          </button>
        </div>

        <div className="w-1/2 h-full">
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
