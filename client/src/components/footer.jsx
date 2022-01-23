import logo from "../../images/ethert.png";
import { Link } from "react-router-dom";

const d = new Date();
let year = d.getFullYear();
const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="w-32" />
        </Link>
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <Link to="/market">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Market
          </p>
        </Link>
        <Link to="/exchange">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Exchange
          </p>
        </Link>
        <Link to="/news">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            News
          </p>
        </Link>
        <a href="https://github.com/CEMK-SBR/Ethert--The-Cryprocurrency-Tracker-App-using-React-Tailwind-Solidity-Web3.0-Blockchain-RapidAPI">
          <p className="text-white text-base text-center mx-2 cursor-pointer">
            Documentation
          </p>
        </a>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">
        Come join us and hear for the unexpected miracle
      </p>
      <p className="text-white text-sm text-center font-medium mt-2">
        info@ethert.space
      </p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">
        &copy; Copyright {year}, @Ethert
      </p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
