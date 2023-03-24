import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./content/home";
import DetailWeather from "./content/detailsWeather";
const Router = () => {
  return (
    
<BrowserRouter>
<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/detailWeather" element={<DetailWeather/>}/>

</Routes>

</BrowserRouter>


  );
};

export default Router;
