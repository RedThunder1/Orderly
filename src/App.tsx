import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './Components/Home/Home'
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
      <main>
          <Navbar/>
          <Routes>
              <Route index element={<Home/>} />
          </Routes>
      </main>
  );
}

export default App;
