import React, { Suspense } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PreOrder from "./pages/PreOrder/PreOrder";
import Costimizer from "./pages/Costimizer";
import Dushboard from "./pages/Admin/Dushboard";
function App() {
    return (
        <div className="App font-body">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/preOrder" element={<PreOrder />} />
                    <Route path="/costimizer" element={<Costimizer />} />
                    <Route path="/dushboard" element={<Dushboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
