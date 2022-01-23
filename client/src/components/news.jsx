import { useState } from "react";
import { Services } from ".";
import NewsCard from "../widgets/NewsCard";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Loader } from ".";
import moment from "moment";

const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
const News = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: 100,
  });

  if (!cryptoNews?.value) return <Loader />;

  return (
    <>
      <div className="flex flex-col w-full justify-center items-center my-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-12 pl-9 pr-9 w-11/12">
          {cryptoNews?.value.map((news, i) => (
            <a href={news.url} target="_blank" rel="noreferrer">
              <NewsCard
                title={
                  news.name.length > 100
                    ? `${news.name.substring(0, 100)}...`
                    : news.name
                }
                image={news?.image?.thumbnail?.contentUrl || demoImage}
                body={
                  news.description.length > 80
                    ? `${news.description.substring(0, 80)}...`
                    : news.description
                }
                provider_logo={
                  news.provider[0]?.image?.thumbnail?.contentUrl || demoImage
                }
                provider={
                  news.provider[0]?.name.length > 20
                    ? `${news.provider[0]?.name.substring(0, 20)}...`
                    : news.provider[0]?.name
                }
                time={moment(news.datePublished).startOf("ss").fromNow()}
              />
            </a>
          ))}
        </div>
      </div>
      <Services />
    </>
  );
};

export default News;
