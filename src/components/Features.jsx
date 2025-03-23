import featureThumbnail from "../assets/slack_screenshot.png"; 
import { PlayCircle } from "lucide-react"; 

const Features = () => {
  return (
    <section className="mx-auto px-12 py-16 flex flex-col md:flex-row items-center gap-x-36 gap-y-12">
      
      <div className="text-center md:text-left space-y-6 md:order-2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Now is your moment to build a better tomorrow
        </h2>
        <p className="text-lg text-gray-600">
          Slack gives your team the tools and information they need to work smarter, not harder.
        </p>

        
        <button className="flex items-center space-x-2 border border-purple-600 text-purple-700 px-6 py-3 rounded-md shadow-md hover:bg-purple-50 hover:border-purple-700">
          <PlayCircle className="w-6 h-6" />
          <span>Watch Video</span>
        </button>
      </div>

      
      <div className="relative w-full max-w-lg md:order-1">
        <img src={featureThumbnail} alt="Feature Video" className="w-full rounded-lg shadow-lg" />
        
        
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition">
            <PlayCircle className="w-12 h-12 text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
