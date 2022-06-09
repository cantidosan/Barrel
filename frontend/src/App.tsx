import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import prflag from '../src/assets/images/prflag.png'
import americanflag from '../src/assets/images/americanflag.png'
import HomePage from './Pages/HomePage';


//TODO FINE TUNE THE FLAG DISPLAY STYLING
//TODO STYLE THE ROUTE INFO CARD TO COMPLETION



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
