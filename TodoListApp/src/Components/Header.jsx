import React from "react";

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 mb-4 shadow-lg">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-wide animate-pulse">
          To-Do List
        </h1>
        <p className="mt-2 text-lg font-light animate-fade-in">
          Organize your tasks with ease
        </p>
      </div>
    </header>
  );
}

export default Header;
