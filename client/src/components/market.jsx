import { Services } from ".";
import CoinCard from "../widgets/CoinCard";
import MarketCard from "../widgets/MarketCard";
import millify from "millify";
import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Loader } from ".";

const Market = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery(42);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <div className="flex-row  md:flex  w-2/3 items-start justify-evenly  ">
          <MarketCard />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cryptos?.map((currency) => (
            <CoinCard
              key={currency.uuid}
              rank={currency.rank}
              name={currency.name}
              icon={currency.iconUrl}
              price={millify(currency.price)}
              mcap={millify(currency.marketCap)}
              dailyChange={currency.change}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Market;
