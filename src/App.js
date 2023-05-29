import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import MainNavigation from './shared/navigation/MainNavigation'
import Home from "./home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/delivery/:fname" element={<Store />} />
          <Route exact path="/delivery/:fname/:pname" element={<Store />} /> */}
        </Routes>
        {/*<Contact />
        <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
