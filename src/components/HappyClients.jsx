import google from "../assets/clients_google.png";
import dribbble from "../assets/clients_dribbble.png";
import linkedin from "../assets/clients_linkedin.png";
import amazon from "../assets/clients_amazon.png";
import medium from "../assets/clients_medium.png";
import spotify from "../assets/clients_spotify.png";
import pagination from "../assets/pagination-icon.png";

export default function HappyClients() {
  return (
    <>
      <div className="container m-auto py-[100px]">
        <div className="w-1/2 m-auto px-12">
          <h2 className="font-bold text-5xl text-[#333333] mb-6 text-center">
            Happy Clients
          </h2>
          <p className="text-center text-[#87909D] text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <img src={google} alt="google logo" />
          <img src={dribbble} alt="dribbble logo" />
          <img src={linkedin} alt="linkedin logo" />
          <img src={amazon} alt="amazon logo" />
          <img src={medium} alt="medium logo" />
          <img src={spotify} alt="spotify logo" />
        </div>
      </div>

      <div className="container m-auto pb-[100px]">
        <div className="w-1/2 m-auto px-12">
          <h2 className="font-bold text-5xl text-[#333333] mb-6 text-center">
            Testimonials
          </h2>
          <p className="text-center text-[#87909D] text-lg">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-6">
          <div className="col-start-2 col-span-4 mt-[70px] justify-center">
            <blockquote className="text-center  text-lg">
              <p className="text-[#2B384C] font-medium">
                “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis
                mollis felis turpis, nec semper odio convallis at. Curabitur
                imperdiet semper arcu, a finibus arcu suscipit in. Donec quis
                placerat nibh. Maecenas est purus, eleifend ac cursus sed,
                tincidunt ut sapien. Morbi ornare elit at libero suscipit
                porta.”
              </p>
              <p className="text-black font-semibold mt-6">Esther Howard</p>
              <p className="text-black font-light">
                Managing Director, ABC company
              </p>
            </blockquote>
            <figure className="flex justify-center mt-12">
              <img src={pagination} alt="pagination" />
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}
