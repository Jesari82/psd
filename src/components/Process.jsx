import example from '../imges/Frame 44.png';
import exampleTwo from '../imges/Frame 441.png';
import exampleThree from '../imges/Frame 442.png';
import exampleFour from '../imges/Frame 443.png';

function Process() {
   
  
    return (
        <div className=" flex items-center justify-center bg-[#F0F1F3] pt-64 pb-32 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
      

          <div className="flex w-3/4 flex-col justify-center">
            <h2 className="text-3xl font-semibold text-[#132238] mb-6">
              Work Process
            </h2>
            <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,            </p>
            <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
            </p>
          </div>
  
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           
              <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-left -translate-y-4">
               <div className="rounded-full p-4 mb-2">
                        <img src={example} alt="Example"/>
                    </div>
                    <h3 className="text-xl font-semibold px-4 mb-2">1. Research</h3>
                    <p className="text-left px-4 pb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcus</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-left">
                    <div className="rounded-full p-4 mb-2">
                        <img src={exampleTwo} alt="Example Two"/>
                    </div>
                    <h3 className="text-xl font-semibold px-4 mb-2">2. Analyze</h3>
                    <p className="text-left px-4 pb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcus</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-left -translate-y-4">
                    <div className="rounded-full p-4 mb-2">
                        <img src={exampleThree} alt="Example Three"/>
                    </div>
                    <h3 className="text-xl font-semibold px-4 mb-2">3. Design</h3>
                    <p className="text-left px-4 pb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcus</p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-left">
                    <div className="rounded-full p-4 mb-2">
                        <img src={exampleFour} alt="Example Four"/>
                    </div>
                    <h3 className="text-xl font-semibold px-4 mb-2">4. Develop</h3>
                    <p className="text-left px-4 pb-4 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcus</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Process;