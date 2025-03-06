import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import NewsSection from "../components/Happening";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="bg-gray-100">
        <Trending />
        <NewsSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
