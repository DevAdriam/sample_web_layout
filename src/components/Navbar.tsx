import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Brand</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Discovery
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Photos
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
          <img
            src="https://media.istockphoto.com/id/1359965690/photo/portrait-of-a-young-female-traveler-with-a-beautiful-mountain-and-sea-of-fog-in-the-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=7V9QLCcoIji4BcWOTL6ODr5INhMgPHidZbJKV2aY3JM="
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300"
          />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 p-4">
          <a href="#" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Discovery
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Photos
          </a>
          <a href="#" className="text-gray-700 hover:text-black">
            Contact
          </a>
          <img
            src="https://media.istockphoto.com/id/1359965690/photo/portrait-of-a-young-female-traveler-with-a-beautiful-mountain-and-sea-of-fog-in-the-morning.webp?a=1&b=1&s=612x612&w=0&k=20&c=7V9QLCcoIji4BcWOTL6ODr5INhMgPHidZbJKV2aY3JM="
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-gray-300 mx-auto"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
