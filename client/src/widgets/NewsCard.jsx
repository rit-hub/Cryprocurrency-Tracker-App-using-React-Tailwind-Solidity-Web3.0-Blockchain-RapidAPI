const NewsCard = ({ title, image, body, provider_logo, provider, time }) => {
  return (
    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-48 sm:w-80 w-full my-2 blue-glassmorphism .white-glassmorphism  cursor-pointer  ">
      <div className="flex justify-between flex-col w-full h-full ">
        <div className="flex justify-between items-start  h-2/4">
          <div className=" w-3/4 h-4/5">
            <p className="text-white font-semibold text-sm">{title}</p>
          </div>
          <div className="w-16 h-16 rounded-md border-2 border-gray-500 flex justify-center items-center bg-zinc-700 mr-1">
            <img src={image} alt="" className=" rounded-md " />
          </div>
        </div>

        <div className="w-5/6">
          <p className="text-white text-xs">{body}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <img src={provider_logo} alt="" className="w-4 h-4  mr-2" />
            <p className="text-white font-normal text-sm mt-1">{provider}</p>
          </div>

          <p className="text-white font-light text-xs mt-1">{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
