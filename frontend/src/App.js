import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import ScrollToTop from './shared/util/ScrollToTop';
import MainNavigation from './shared/navigation/MainNavigation'
// import Home from "./home/Home";
// import Blog from "./blog/Blog";
// import Newsletters from "./newsletters/Newsletters";
// import AboutUs from "./aboutus/AboutUs";
//import Categories from "./categories/Categories";
import SelectedCategory from "./categories/components/SelectedCategory";
import SingleBlogItem from "./categories/components/SingleBlogItem";
import Footer from './shared/footer/Footer';

const Main = React.lazy(() => import("./home/Home.js"));
const Blog = React.lazy(() => import("./blog/Blog.js"));
const Newsletters = React.lazy(() => import("./newsletters/Newsletters"));
const AboutUs = React.lazy(() => import("./aboutus/AboutUs"));
const Categories = React.lazy(() => import("./categories/Categories"));
const SignUp = React.lazy(() => import("./user/components/SignUp.js"));

function App() {
  const { token, login, logout, userId, user } = useAuth();

  let routes;
  if (token) {
    routes = (
      <React.Fragment>
        {/* <Route exact path="/main" element={<UserMain />} />
        <Route exact path="*" element={<MainPage />} /> */}
      </React.Fragment>
    );
  } else {
    routes = (
      <React.Fragment>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/newsletters" element={<Newsletters />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/categories/:cname" element={<SelectedCategory />} />
        <Route exact path="/categories/:cname/:owner/:bid" element={<SingleBlogItem />} />
        {/* <Route path="*" element={<UserMain />} /> */}
      </React.Fragment>
    );
  }
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <MainNavigation />

          <Suspense
            fallback={
              <div className="loading-wrapper">
                <i className="fa fa-circle-o-notch fa-spin"></i>
              </div>
            }
          >
            <Routes>{routes}</Routes>
          </Suspense>

          {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/newsletters" element={<Newsletters />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/categories/:cname" element={<SelectedCategory />} />
            <Route exact path="/categories/:cname/:owner/:bid" element={<SingleBlogItem />} />
          </Routes> */}
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
