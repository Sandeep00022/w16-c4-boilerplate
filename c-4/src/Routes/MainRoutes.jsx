import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Kid from "../components/Kid";
import Men from "../components/Men";
import { Navbar } from "../components/Navbar";
import { Products } from "../components/Products";
import Women from "../components/Women";

const MainRoutes = () => {
  return <>{/* Navbar and all the routes */}
          <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="products" element={<Products/>}/>
          <Route path="products/men" element={<Men/>}/>
            <Route path="products/women" element={<Women/>}/>
            <Route path="products/kid" element={<Kid/>}/>
           
          <Route path="about" element={<About/>}/>

        </Routes>
  
  </>;
};
export { MainRoutes };
