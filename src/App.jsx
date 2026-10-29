import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cta from "./conponenets/Cta";
import Footer from "./conponenets/Footer";
import Home from "./pages/Home"
import Nav from "./conponenets/Nav"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";


function App() {

  return (
    <>
     <BrowserRouter>
       <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
       <Footer />
      </BrowserRouter>
    </>
  );
}

export default App

 
  
     
