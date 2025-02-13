import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-600 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Constituency Monitor. All rights reserved.</p>
    </footer>
  );
};

export default Footer;