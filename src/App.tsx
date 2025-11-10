import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar";
import Shops from "./Components/Shops/Shops";

function App() {
  return (
      <main>
          <Navbar/>
          <Routes>
              <Route index element={<Home/>}/>
              <Route path="/shops" element={<Shops/>}/>
          </Routes>
      </main>
  );
}

export default App;
