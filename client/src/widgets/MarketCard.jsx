import { useGetCryptoStatsQuery } from "../services/cryptoApi";
import millify from "millify";
import { Loader } from "../components/index";

const MarketCard = () => {
  const { data, isFetching } = useGetCryptoStatsQuery();
  const globalStats = data?.data;

  if (isFetching) return <Loader />;
  return (
    <>
      <div className="p-3 flex justify-end items-start flex-col rounded-xl  sm:w-5/6 w-full my-5 white-glassmorphism .white-glassmorphism ">
        <div className="flex justify-between flex-col w-full h-full ">
          <div className=" flex-row md:flex justify-evenly text-xl font-bold  text-white   items-center">
            <div className=" flex-col rounded-xl blue-glassmorphism p-3 m-2 ">
              <p className="p-1">
                Total Coins:{" "}
                <span className="text-2xl font-semibold text-emerald-200">
                  {millify(globalStats?.totalCoins)}
                </span>
              </p>

              <p className="p-1">
                Total Exchanges:{" "}
                <span className="text-2xl font-semibold text-emerald-200 ">
                  {millify(globalStats?.totalExchanges)}
                </span>
              </p>
            </div>
            <div className="flex-col rounded-xl blue-glassmorphism p-3 ">
              <p className="p-1">
                Total Market Cap:{" "}
                <span className="text-2xl font-semibold text-emerald-200">
                  {millify(globalStats?.totalMarketCap)}
                </span>
              </p>
              <p className="p-1">
                Total 24Hr Volume:{" "}
                <span className="text-2xl font-semibold text-rose-200">
                  {millify(globalStats?.total24hVolume)}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketCard;
