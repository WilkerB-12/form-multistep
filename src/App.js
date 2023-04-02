//libraries
import { Routes, Route } from "react-router-dom";

//pages
import Signup from "./pages/signup";
import Home from "./pages/home";

function App() {
  return (
    <>
      <div className="grid w-auto h-screen bg-blue-500 place-content-center">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
