import { useState } from "react";
import { X } from "lucide-react"; 

const Alert = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; 

  return (
    <div className="container mx-auto my-4 rounded-full bg-purple-600 text-white text-center py-3 px-4 flex justify-between items-center transition-opacity duration-300">
      <span className="text-sm md:text-base font-medium">
        Slack is your digital HQ.
      </span>
      <button onClick={() => setVisible(false)} className="p-1 hover:opacity-70">
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Alert;
