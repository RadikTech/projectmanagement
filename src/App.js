import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Payments from "./pages/Payments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />
        
        <div className="flex-grow bg-gray-100">
          {/* Routes setup */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="*" element={<Dashboard />} /> {/* Catch-all route */}
          </Routes>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
