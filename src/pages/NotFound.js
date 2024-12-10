import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 space-y-8">
      {/* Main content */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-[#4ade80] to-[#16a34a] text-transparent bg-clip-text">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Page Not Found
        </h2>
        <p className="text-gray-400 text-lg max-w-lg mx-auto">
          The page you're looking for seems to have taken a wrong turn. Like a supercar on an empty road, it's nowhere to be found.
        </p>
      </div>

      {/* Car silhouette illustration */}
      <div className="relative w-full max-w-2xl h-48 mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-lg" />
        <div className="absolute inset-0 bg-[url('assets/images/image242.jfif?height=200&width=600')] bg-center bg-contain bg-no-repeat opacity-50" />
      </div>

      {/* Return home button */}
      <button
        onClick={() => navigate('/')}
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-md text-lg font-medium transition-all duration-200"
      >
        <div className="inline-flex items-center gap-2">
          <BiArrowBack className="w-5 h-5" />
          Return Home
        </div>
      </button>

      {/* Brand logos */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-30">
        {Array.from({ length: 7 }).map((_, i) => (
          <div
            key={i}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-700 to-gray-800"
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;