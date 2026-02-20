import Navbar from "./components/Navbar";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Services from "./pages/Services";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="background">
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Services />} />
      </Routes>



    </div>
    </div>
    </div>
  );
};

export default App;
