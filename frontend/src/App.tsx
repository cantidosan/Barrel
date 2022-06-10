import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from './Pages/HomePage';


//TODO FINE TUNE THE FLAG DISPLAY STYLING
//TODO STYLE THE ROUTE INFO CARD TO COMPLETION



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
