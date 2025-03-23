import heroVideo from "../assets/hero_slack.webm";
import googleLogo from "../assets/google_icon.svg";

const Hero = () => {
  return (
    <section className=" mx-auto px-8 py-16 flex flex-col md:flex-row items-center gap-8 bg-purple-100">
      
      <div className="text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Cactro is where the future works
        </h1>
        <p className="text-lg text-gray-600">
          Transform the way you work with one place for everyone and everything you need to get stuff done.
        </p>

        
        <div className="flex flex-col md:flex-row items-center gap-4">
          <button className="w-full md:w-fit bg-purple-600 text-white md:px-16 py-4 rounded-sm shadow-md hover:bg-purple-700">
            Try for Free
          </button>
          <button className="w-full md:w-fit flex items-center px-1 py-2 bg-sky-500  text-white uppercase rounded-sm shadow-md hover:bg-sky-600">
            <img src={googleLogo} alt="Google Logo" className="box-content py-2 px-4 w-5 h-5 bg-white" />
            <span className="px-4">Sign up with Google</span>
          </button>
        </div>
      </div>

      
      <div className="w-full max-w-md md:max-w-lg">
        <div className="relative">
            <video autoPlay loop muted className="w-full rounded-lg shadow-lg">
            <source src={heroVideo} type="video/webm" />
            Your browser does not support the video tag.
            </video>
            <span className="absolute px-2 rounded-lg bg-white top-0 left-1/4 -translate-y-1/2">&#128077; 3</span>
            <span className="absolute px-2 rounded-lg bg-white top-1/2 right-0 translate-x-1/2">&#127881; 8</span>
            <span className="absolute px-2 rounded-lg bg-white top-3/4 left-0 -translate-x-1/2">&#128161; 5</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
