import { NavLink, useLocation } from "react-router-dom";
import { UserCircleIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import React from "react";
// z.5 { mobileMenuOpen } PROP von Header(Parent) bekommen
const Navigation = ({ mobileMenuOpen, onCloseMenu }) => {
  const location = useLocation();

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
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-8">
        {items.map((item) => (
          <li key={item.id}>
            {/* Suche User. Ob der aktuelle Eintrag User ist, und mobileMenu true, dann verstecke Icon, wenn false - dann zeige icon-solid*/}
            {item.name === "User" && (
              <NavLink
                to={item.to}
                className={`text-white rounded-md p-2 ${
                  location.pathname === item.to ? "text-red-600" : ""
                }`}
              >
                {mobileMenuOpen ? (
                  <UserCircleIcon className="hidden" />
                ) : (
                  <UserCircleIcon className="h-6 w-6 flex" />
                )}
              </NavLink>
            )}

            {/*Suche Cart. ob der Eintrag Cart ist und mobileMenu true, dann das selbe wie mit "User" */}
            {item.name === "Cart" && (
              <NavLink
                to={item.to}
                className={`text-white rounded-md p-2 ${
                  location.pathname === item.to ? "text-red-600" : ""
                }`}
              >
                {mobileMenuOpen ? (
                  <ShoppingCartIcon className="hidden" />
                ) : (
                  <ShoppingCartIcon className="h-6 w-6 flex" />
                )}
              </NavLink>
            )}

            {/* Suche alles außer User und Cart. Falls kein Icon-Link ist, wird der Link-Text angezeigt */}
            {item.name !== "User" && item.name !== "Cart" && (
              <NavLink
                to={item.to}
                className={`text-white hover:bg-stone-400 hover:text-red-500 p-2 rounded-md text-sm font-medium flex items-center ${
                  location.pathname === item.to ? "text-red-600" : ""
                }`}
                onClick={onCloseMenu}
              >
                {" "}
                {/* 
                  onClick={item.name ? onCloseMenu : null} //! beim clicken in mob.version auf alle links- menü schließen :)
                  //onClick={item.name === "Home" ? onCloseMenu : null} schließe menü, wenn auf "Home" geklickt wird
              */}
                {item.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

//hier in Navigation erstellen wir nav-ul-li für den Header für große Bildschirme, für kleine Bildschirme -mehr im Header
