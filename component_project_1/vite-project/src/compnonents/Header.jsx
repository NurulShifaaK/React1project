import React from "react";

const Header = () => {
  return (
    <header 
    className="h-96 bg-cover bg-center flex items-center justify-center text-white" style={
        {
            backgroundImage: "url('/rocket.jpeg')"
        }
    } >
      <h1 className="text-4xl font-bold bg-black/50 rounded-lg backdrop:blur-sm p-4">Welcome to My Site</h1>
    </header>

  );
};

export default Header;
