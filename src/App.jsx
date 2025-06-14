import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enchancer</h1>
        <p className="text-lg text-gray-500">Upload your image let AI enchance it for you!</p>
      </div>
      <Home></Home>
      <div className="text-lg text-gray-500 mt-6">
        Powered by AI
      </div>
    </div>
  );
}

export default App;
