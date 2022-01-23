import { SiEthereum } from "react-icons/si";

const CoinCard = ({ rank, name, icon, price, mcap, dailyChange }) => {
  return (
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 white-glassmorphism .white-glassmorphism ">
      <div className="flex justify-between flex-col w-full h-full ">
        <div className="flex justify-between  pr-1">
          <div className=" flex items-center text-white font-bold">
            <p> {` ${rank}. ${name}`}</p>
          </div>
          <div className="w-8 h-8 rounded-full flex justify-center items-center  ">
            <img src={icon} alt="" />
          </div>
        </div>

        <div className=" flex justify-between text-xs pr-4 text-white">
          <div className=" flex-col items-center justify-between ">
            <p className="p-1">
              Market Cap: <span>{mcap}</span>
            </p>
            <p className="p-1">
              Daily Change: <span>{dailyChange}</span>
            </p>
          </div>
          {/* <div className="flex-col items-center justify-between">
            <p className="p-1">
              Market Cap: <span>420000</span>
            </p>
            <p className="p-1">
              Volume: <span>547000</span>
            </p>
          </div> */}
        </div>

        <div className=" flex justify-between items-center pr-1">
          <p className="text-white font-medium text-base mt-1">
            Price: <span className="font-semibold text-lg">${price}</span>
          </p>
          <p className="text-white font-light text-sm">5 min ago</p>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
