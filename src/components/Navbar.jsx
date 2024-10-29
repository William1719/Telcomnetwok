import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-2 bg-white">
      <div className="container mx-auto flex items-center">
        <Link to="/" className="text-black text-2xl font-bold px-4">
          AT&T
        </Link>
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold " //Cuando se seleccione sera azul
                : "text-black hover:underline decoration-blue-800 decoration-2 underline-offset-8" //Subrayado azul
            }
          >
            Ofertas
          </NavLink>
          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "text-black hover:underline decoration-blue-800 decoration-2 underline-offset-8"
            }
          >
            Movil
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "text-blue-800 font-semibold"
                : "text-black hover:underline decoration-blue-800 decoration-2 underline-offset-8"
            }
          >
            Internet
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
