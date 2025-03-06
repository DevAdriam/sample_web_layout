const TrendingCard = ({
  image,
  title,
  description,
  time,
}: {
  image: string;
  title: string;
  description: string;
  time: string;
}) => {
  return (
    <div className="bg-white min-w-[300px] w-[320px] rounded-xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <div className="flex items-center text-gray-400 text-xs mt-2">
          <span className="material-icons text-sm mr-1">access_time</span>
          {time}
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
