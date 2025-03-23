import { useState } from "react";
import { Menu, X, Search } from "lucide-react"; // For icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="text-xl font-bold text-gray-900 flex justify-between items-center gap-8">
            <a href="#" className="block">
                <img src="/cactro.png" alt="cactro logo" className="w-10 h-10 inline"/>
                Slack
            </a>

        
            <div className="hidden md:flex space-x-6 text-gray-700">
                <a href="#" className="hover:text-gray-900">Product</a>
                <a href="#" className="hover:text-gray-900">Enterprise</a>
                <a href="#" className="hover:text-gray-900">Resources</a>
                <a href="#" className="hover:text-gray-900">Pricing</a>
            </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          <button className="text-gray-700 hover:text-gray-900 cursor-pointer">Sign in</button>
          <button className="border border-purple-700 text-purple-700 px-4 py-2 rounded hover:bg-purple-100 cursor-pointer">Talk to Sales</button>
          <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700 cursor-pointer">
            Try for Free
          </button>
        </div>

        
        <div className="md:hidden flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-700 cursor-pointer" />
          <button className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-700">
            Try for Free
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-white mt-2 p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-gray-900">Product</a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">Enterprise</a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">Resources</a>
          <a href="#" className="block text-gray-700 hover:text-gray-900">Pricing</a>
          <button className="w-full border px-4 py-2 rounded-md hover:bg-gray-100">Talk to Sales</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
