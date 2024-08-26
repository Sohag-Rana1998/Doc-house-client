const Banner = () => {
  return (
    <div className="w-full relative bg-[#07332F] h-[800px] lg:h-[700px]">
      <div className=" w-24 lg:w-[180px] h-40 lg:h-[200px] absolute left-0 top-0">
        <img src="https://i.postimg.cc/vBTYpbFf/Vector.png" alt="" />
      </div>
      <div className="max-w-7xl w-full mx-auto">
        <div className="inset-0  absolute text-white py-20 md:flex items-center ">
          <div className="container w-full mx-auto  flex flex-col lg:flex-row justify-between items-start  text-center lg:text-left">
            <div className=" space-y-4 relative w-full lg:w-[50%] mt-5 md:mt-20 lg:mt-0">
              <img
                src="https://i.postimg.cc/x1dgB4pM/Group-6-1.png"
                className=" rotate-45 h-[110px] w-[50px] md:h-[220px] md:w-[100px] absolute top-5 md:-top-14 right-[5%] lg:right-0"
                alt=""
              />
              <h1 className="text-4xl px-5 md:px-0 md:text-5xl font-medium lg:text-7xl">
                Your Best Medical <br /> Help Center
              </h1>
              <p className="">
                Lorem Ipsum is simply dummy text they are printing <br />{" "}
                typesetting has been the industry's standard.
              </p>
              <button className="btn text-white border-none bg-orange-500">
                All Service
              </button>
            </div>
            <div className=" w-full lg:w-[50%] mx-auto h-[400px] relative mt-10   md:mt-5">
              <img
                className="absolute z-20 left-[5%] top-5  md:left-[20%] w-[45%] h-[50%]  md:w-[250px] md:h-[250px]"
                src="https://i.postimg.cc/Pf9XRCXM/Rectangle-20077.png"
                alt=""
              />
              <img
                className="absolute right-[5%]  md:right-[10%] lg:right-0  z-50  w-[45%] h-[50%]  md:w-[250px] md:h-[250px]"
                src="https://i.postimg.cc/hGS3r1N3/Rectangle-20075.png"
                alt=""
              />
              <img
                className="absolute w-[45%] h-[50%]  md:w-[250px] md:h-[250px] bottom-14 md:bottom-0 translate-x-[50%] md:left-[21%] z-40 lg:z-50"
                src="https://i.postimg.cc/1XQQyq8x/Rectangle-20076.png"
                alt=""
              />
              <div className="w-[250px] hidden lg:block h-[250px] z-10 bg-[#374a40]  absolute left-[40%] -top-20 rounded-full"></div>
              <div className="absolute bottom-16 left-0 md:left-10 hidden md:block">
                <div className="flex justify-center ">
                  <img
                    src="https://i.postimg.cc/0Q3b2b99/Group-34830-1.png"
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="absolute -bottom-10 -left-6 hidden lg:block">
                  <img
                    src="https://i.postimg.cc/x1dgB4pM/Group-6-1.png"
                    className=""
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
