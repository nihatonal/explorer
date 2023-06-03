import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import ScrollToTop from './shared/util/ScrollToTop';
import MainNavigation from './shared/navigation/MainNavigation'
import Home from "./home/Home";
import Blog from "./blog/Blog";
import Newsletters from "./newsletters/Newsletters";
import AboutUs from "./aboutus/AboutUs";
import Categories from "./categories/Categories";
import SelectedCategory from "./categories/components/SelectedCategory";
import SingleBlogItem from "./categories/components/SingleBlogItem";
import Footer from './shared/footer/Footer'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <MainNavigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/newsletters" element={<Newsletters />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/categories/:cname" element={<SelectedCategory />} />
            <Route exact path="/categories/:cname/:owner/:bid" element={<SingleBlogItem />} />
            {/*  <Route exact path="/delivery/:fname/:pname" element={<Store />} /> */}
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
