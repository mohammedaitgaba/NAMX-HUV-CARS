import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PreOrder from "./pages/PreOrder/PreOrder";

function App() {
  return (
    <div className="App font-body">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/preOrder" element={<PreOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
