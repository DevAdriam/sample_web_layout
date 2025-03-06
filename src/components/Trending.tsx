import TrendingCard from "./TrendingCard";

const Trending = () => {
  const trendingItems = [
    {
      image:
        "https://images.unsplash.com/reserve/OQx70jjBSLOMI5ackhxm_urbex-ppc-030.jpg?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYWlufGVufDB8fDB8fHww",
      title: "Dolore magna aliqua",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "2m ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1442570468985-f63ed5de9086?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYWlufGVufDB8fDB8fHww",
      title: "Morbi eleifend a libero",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "1h ago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515165562839-978bbcf18277?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhaW58ZW58MHx8MHx8fDA%3D",
      title: "Morbi eleifend a libero",
      description:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "1h ago",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold my-4">TRENDING</h2>
      <div className="flex justify-start items-center gap-6 flex-wrap ">
        {trendingItems.map((item, index) => (
          <TrendingCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
