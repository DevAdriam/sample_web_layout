import HappeingCard from "./HappeningCard";

const articles = [
  {
    category: "CITY",
    title: "Large article title",
    description:
      "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.",
    time: "2m ago",
    image:
      "https://images.unsplash.com/photo-1556446384-0c6fd6c8e673?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGlsbHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    category: "TRAVEL",
    title: "Large article title",
    description:
      "Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id.",
    time: "2m ago",
    image:
      "https://images.unsplash.com/photo-1467830839049-11173e7b2755?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbGx8ZW58MHx8MHx8fDA%3D",
  },
];

const smallArticles = [
  {
    title: "Small title",
    time: "3h ago",
    author: "WordNews",
    image:
      "https://media.istockphoto.com/id/519760984/photo/starry-night.webp?a=1&b=1&s=612x612&w=0&k=20&c=w3M0qYdV9e8X7YWbowdHs77mW4PLFQnS-oO1GaG90qU=",
  },
  {
    title: "Small title",
    time: "4h ago",
    author: "Dave",
    image:
      "https://media.istockphoto.com/id/1569696238/photo/aerial-view-of-french-village-at-bana-hills-da-nang-vietnam.webp?a=1&b=1&s=612x612&w=0&k=20&c=A6M527nLaIFBxhF1nWk7-fmJBiIeAjzbAF4QhTll5eg=",
  },
  {
    title: "Small title",
    time: "3h ago",
    author: "Monica",
    image:
      "https://media.istockphoto.com/id/2177528447/photo/roads-and-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=fFAAGsNYO4rU7-X_NOvT5KI-PMHPh3C9ilx5KNpdfMk=",
  },
];

const NewsSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6">HAPPENING NOW</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          {articles.map((article, index) => (
            <HappeingCard key={index} {...article} />
          ))}
        </div>
        <div className="space-y-4">
          {smallArticles.map((article, index) => (
            <div
              key={index}
              className="rounded-lg w-[300px] h-[300px] overflow-hidden grid bg-white shadow-lg"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4 flex flex-col justify-center">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <span className="text-xs text-gray-500">
                  {article.time} by {article.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
