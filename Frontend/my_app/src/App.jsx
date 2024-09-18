import About from "./components/About";
import Create from "./components/Create";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

import { BrowserRouter,  Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/about" component={About} />
      
      </Routes>
      </BrowserRouter>
    </>
  );
}


export default App