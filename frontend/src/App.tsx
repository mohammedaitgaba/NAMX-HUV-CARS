import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import { PreOrder } from './pages/PreOrder'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/pre-order" element={<PreOrder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
