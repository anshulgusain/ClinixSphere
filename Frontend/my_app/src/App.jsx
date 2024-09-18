import About from "./components/About";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter,  Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/about" element={<About />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}


export default App