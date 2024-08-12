import HappyClients from "./HappyClients";

export default function Services() {
  return (
    <>
      <section className="bg-[#F0F1F3]">
        <div class="container m-auto py-[150px] grid grid-cols-2 gap-4 content-center">
          <div className="pr-36 content-center">
            <h1 className="font-bold text-5xl text-[#333333] mb-6">
              What I do?
            </h1>
            <p className="text-[#87909D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
            <br />
            <p className="text-[#87909D]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non.
            </p>
            <button className="py-[12px] px-6 bg-[#A53DFF] text-white font-bold text-lg rounded mt-12 hover:bg-violet-600">
              Say Hello!
            </button>
          </div>
          <div className="p-0">
            <div className="bg-white p-8 rounded-md  border-l-[5px] border-[#A53DFF] mb-6 drop-shadow-lg">
              <p className="text-2xl font-bold">User Experience (UX)</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md mb-6 drop-shadow-md">
              <p className="text-2xl font-bold">User Interface (UI)</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
            <div className="bg-white p-8 rounded-md drop-shadow-md">
              <p className="text-2xl font-bold">Web Development</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <HappyClients />
    </>
  );
}
