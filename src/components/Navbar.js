import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">Project Management</h1>
                
                {/* Hamburger Menu for Mobile */}
                <button
                    className="sm:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Links */}
                <ul
                    className={`${
                        isMenuOpen ? "block" : "hidden"
                    } sm:flex sm:space-x-4 sm:items-center absolute sm:static top-0 left-0 w-full sm:w-auto bg-blue-500 sm:bg-transparent text-center sm:text-left`}
                >
                    <li className="py-2 sm:py-0">
                        <Link to="/" className="hover:underline">
                            Dashboard
                        </Link>
                    </li>
                    <li className="py-2 sm:py-0">
                        <Link to="/projects" className="hover:underline">
                            Projects
                        </Link>
                    </li>
                    <li className="py-2 sm:py-0">
                        <Link to="/payments" className="hover:underline">
                            Payments
                        </Link>
                    </li>

                     <li className="py-2 sm:py-0" onClick={()=>{
                        setIsMenuOpen(false);
                     }}>
                        Close
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
