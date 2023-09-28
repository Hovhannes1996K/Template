import Header from "./Components/Header";
import Boxes from "./Components/Pages/Home/Boxes";
import Footer from "./Components/Pages/Home/Footer";
import Section from "./Components/Pages/Contact/Section";
import { About } from "./Components/Pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Boxes/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Section/>}></Route>  
      </Routes>
      <Footer/>
    </div>
  );
}

// propsy nra hamar e, erb vor kacnhum enq componenty u talis enq nran arjeq
export default App;
