import { SiEthereum } from "react-icons/si";
import { Services } from ".";
const Welcome = () => {
  return (
    <>
      <div className=" flex w-full   justify-center items-center">
        <div className=" flex md:flex-row flex-col items-center  justify-between md:p-20 py-12 px-4">
          <div className=" mb-10 md:mb-0 flex flex-1 justify-start items-start flex-col md:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              Send Crypto <br /> across the globe
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Explore the crypto world. Transfer & Exchange cryptocurrencies
              easily on Ethert.
            </p>
          </div>
          <div className=" rounded-full   md:rounded-full  border-2 border-x-cyan-600 p-14 border-y-teal-300 blue-glassmorphism">
            <SiEthereum fontSize={200} color="cyan" />
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default Welcome;
