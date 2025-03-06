const HappeingCard = ({
  image,
  category,
  title,
  description,
  time,
}: {
  image: string;
  category: string;
  title: string;
  description: string;
  time: string;
}) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
    <img src={image} alt={title} className="w-full h-[450px] object-cover" />
    <div className="absolute bottom-0 left-0 right-0 py-8 px-10 bg-gradient-to-t from-black via-transparent to-transparent text-white">
      {category && (
        <span className="text-sm uppercase font-semibold absolute -top-70 ">
          {category}
        </span>
      )}
      <h3 className="text-xl font-bold">{title}</h3>
      {description && <p className="text-sm mt-1">{description}</p>}
      <span className="text-xs opacity-80">{time}</span>
    </div>
  </div>
);
export default HappeingCard;
