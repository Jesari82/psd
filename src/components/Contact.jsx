import location from "../assets/location-icon.png";
import location2 from "../assets/location-icon2.png";
import socialMedia from "../assets/social-media.png";
import submit from "../assets/submit.png";

export default function Contact() {
  return (
    <>
      <div className="container m-auto bg-white drop-shadow-2xl p-[88px] grid grid-cols-2 gap-4 rounded-2xl">
        <div className="pr-[80px]">
          <h1 className="font-bold text-[38px] text-[#132238] mb-4">
            Let's discuss your Project
          </h1>
          <p className="text-[#87909D] text-lg mb-8">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <div className="flex bg-white p-6 drop-shadow-2xl rounded-xl w-2/3">
            <img src={location} alt="" />
            <p className="pl-4">
              Address: <br />
              <span className="font-semibold text-[#132238]">
                New Mexico 31134
              </span>
            </p>
          </div>
          <div className="flex p-6  w-2/3 mt-2">
            <img src={location2} alt="" />
            <p className="pl-4">
              My Email: <br />
              <span className="font-semibold text-[#132238]">
                mymail@mail.com
              </span>
            </p>
          </div>
          <div className="flex p-6  w-2/3 mt-2">
            <img src={location2} alt="" />
            <p className="pl-4">
              Call Me Now: <br />
              <span className="font-semibold text-[#132238]">
                00-1234 00000
              </span>
            </p>
          </div>
          <div className="mt-8">
            <img src={socialMedia} alt="" />
          </div>
        </div>
        <div className="content-center">
          <p className="text-[#87909D] text-lg mb-10">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
          <form action="">
            <div className="border-b-2 border-[#A53DFF] w-full flex py-1">
              <label htmlFor="Name" className="text-lg text-[#A53DFF] flex">
                Name*
              </label>
              <input
                type="text"
                className="w-full ml-4 px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="border-b-2 border-slate-200 w-full flex py-1 mt-4">
              <label htmlFor="Name" className="text-lg text-[#697484] flex">
                Email*
              </label>
              <input
                type="text"
                className="w-full ml-4 px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="border-b-2 border-slate-200 w-full flex py-1 mt-4">
              <label htmlFor="Name" className="text-lg text-[#697484] flex">
                Location
              </label>
              <input
                type="text"
                className="w-full ml-4 px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-b-2 border-slate-200 w-full flex py-1 mt-4">
                <label htmlFor="Name" className="text-lg text-[#697484] flex">
                  Budget*
                </label>
                <input
                  type="text"
                  className="w-full ml-4 px-3 py-2 focus:outline-none"
                />
              </div>
              <div className="border-b-2 border-slate-200 w-full flex py-1 mt-4 col-span-2">
                <label htmlFor="Name" className="text-lg text-[#697484] flex">
                  Subject*
                </label>
                <input
                  type="text"
                  className="w-full ml-4 px-3 py-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="border-b-2 border-slate-200 w-full flex py-4 mt-4">
              <label htmlFor="Name" className="text-lg text-[#697484] flex">
                Message*
              </label>
              <input
                type="text"
                className="w-full ml-4 px-3 py-2 focus:outline-none"
              />
            </div>
            <button className="py-[12px] px-6 bg-[#A53DFF] text-white font-semibold text-[16px] rounded mt-12 flex hover:bg-violet-600">
              Submit <img src={submit} alt="submit" className="pl-4 pt-1" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
