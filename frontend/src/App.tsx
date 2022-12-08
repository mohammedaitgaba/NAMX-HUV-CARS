import React, { Suspense } from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import PreOrder from "./pages/PreOrder/PreOrder";
import IndexModel from "./pages/anumation/IndexModel"


function App() {
    return (
        <div className="App font-body">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/preOrder" element={<PreOrder />} />
                    <Route path="/model" element={<IndexModel />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
