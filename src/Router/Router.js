import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home";
import MoviesDetails from "../Components/MoviesDetails";
import Header from "../Components/Header";
import NotFound from "../Components/NotFound";
import Stats from "../Components/Stats";
import 'antd/dist/antd.css';
// import Footer from "../Components/footer";

function AppRouter() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":movieid" element={<MoviesDetails />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    );
}

export default AppRouter;