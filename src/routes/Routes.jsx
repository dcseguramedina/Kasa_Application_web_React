//Import internal libraries
import React from "react";
import { Routes, Route } from 'react-router-dom';

//Import pages
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Accommodation from '../pages/accommodation/Accommodation';
import NotFound from '../pages/notFound/NotFound';

function AppRoutes() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accommodation/:id" element={<Accommodation />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;