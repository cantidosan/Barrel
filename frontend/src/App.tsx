import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage';
import RouteDetailsPage from './Pages/RouteDetailsPage';


//TODO FINE TUNE THE FLAG DISPLAY STYLING
//TODO STYLE THE ROUTE INFO CARD TO COMPLETION



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/routes/:route_id" element={<RouteDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
