import { Instagram, Twitter, Facebook, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-700 py-8 px-4">
      <div className="container mx-auto flex flex-wrap justify-between gap-6">
        <div>
          <h2 className="text-lg font-bold">LOGO</h2>
        </div>

        <div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Discovery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Photos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Guidelines
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:text-gray-900">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Advertise
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Integrations
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-2 h-[40px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md focus:outline-none"
            />
            <button className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900">
              Subscribe
            </button>
          </div>
          <p>Stay in touch with us for the latest products!</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <Instagram />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <Twitter />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <Facebook />
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            <Globe />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
