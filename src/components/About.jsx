import photo from "../imges/Rectangle 30.png";
import social from "../imges/Social Media card.png";
import arrow from "../imges/Vector.png";
const About = () => {
  return (
    <div className="flex justify-center  ">
      <div className="w-3/4 bg-white justify-center p-24 gap-32 rounded-xl ">
        <div className=" flex flex-row gap-24">
          <div className="flex flex-col w-2/4">
            <div className=" w-full h-full">
              <img
                src={photo}
                alt="Developer Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative  w-full h-full ">
              <img
                src={social}
                alt="Social Media"
                className="absolute top-[-4rem] "
              />
            </div>
          </div>
          <div className="w-2/4 flex flex-col gap-8">
            <h1 className="font-work-sans  font-semibold text-3xl text-left">
              I am Professional User Experience Designer
            </h1>

            <p className="font-work-sans text-sm text-left">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services and online stores. My
              passion is to design digital user experiences.
            </p>
            <p className="font-work-sans text-sm text-left">
              I design and develop services for customers specializing creating
              stylish, modern websites, web services.
            </p>

            <div className="flex flex-row justify-left">
              <button className="bg-[#A53DFF] text-white px-4 py-2 rounded-lg mr-2">
                My Project
              </button>
              <button className="flex items-center bg-white text-[#A53DFF] border border-[#A53DFF] px-4 py-2 rounded-lg mr-2">
                <img src={arrow} alt="arrow" className="px-2" />
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
