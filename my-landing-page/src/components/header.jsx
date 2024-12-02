import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 md:px-8">
      <h1 className="text-xl font-bold">snap</h1>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-gray-700">Features</a>
        <a href="#" className="hover:text-gray-700">Company</a>
        <a href="#" className="hover:text-gray-700">Careers</a>
        <a href="#" className="hover:text-gray-700">About</a>
      </nav>
      <div className="hidden md:flex space-x-4">
        <button className="text-sm">Login</button>
        <button className="text-sm border px-4 py-1 rounded">Register</button>
      </div>
    </header>
  );
}

export default Header;
