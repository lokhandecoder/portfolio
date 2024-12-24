import React from "react";
import { useNavigate } from "react-router-dom";
import NavItems from "../../Data/NavbarData.json";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      {NavItems.NavItems.map((item, key) => (
        <div key={key} className="navitems" onClick={() => navigate(item.path)}>
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
