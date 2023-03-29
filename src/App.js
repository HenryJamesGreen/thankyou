import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Thankyou from "./pages/Thankyou";
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';


function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
