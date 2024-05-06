import { NavLink } from "react-router-dom";
import React from "react";

const Navigation = () => {
  const items = [
    { name: "Home", to: "/", id: 1 },
    { name: "Program", to: "/program", id: 2 },
    { name: "About Us", to: "/about-us", id: 3 },
    { name: "Contact", to: "/contact", id: 4 },
    { name: "User", to: "/user", id: 5 },
    { name: "Cart", to: "/cart", id: 6 },
  ];
  return (
    <nav>
      <ul className="flex flex-col justify-center items-center   sm:flex-row  md:space-x-2 ">
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                className="text-white  xl:p-4 hover:bg-stone-700  py-2 rounded-md text-sm font-medium "
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
