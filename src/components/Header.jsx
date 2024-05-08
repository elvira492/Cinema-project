import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Navigation from "./Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  //Menü schließen beim Clicken auf mobile version von Home/Program/AboutUs/Contact
  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-neutral-800 text-white py-4 sticky top-0 z-10 opacity-90">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">Fantasy Cinema</h1>
        </div>

        {/* Burger-Button für mobiles Menü */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">Toggle mobile menu</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" />
            )}
          </button>

          {/* Mobiles Menü */}
          {mobileMenuOpen && (
            <div className="bg-neutral-800 text-white py-2 mb-8 absolute top-20 left-0 right-0 overflow-hidden max-h-40 lg:hidden">
              <Navigation
                mobileMenuOpen={mobileMenuOpen}
                onCloseMenu={handleCloseMenu}
              />{" "}
              {/* PROP mobileMenuOpen an Navigation übergeben(um Icons in Navigation hidden halten, z.27,z.37); prop onCloseMenu vom Function oben(z.19) um in Navigation es zu nutzen*/}
            </div>
          )}

          {/* Hinzugefügte outline Icons neben Burger Button für User und Cart */}
          <NavLink to="/user" className="text-white ml-4">
            <UserCircleIcon className="h-6 w-6 text-white" />
          </NavLink>
          <NavLink to="/cart" className="text-white ml-4">
            <ShoppingCartIcon className="h-6 w-6 text-white" />
          </NavLink>
        </div>

        {/* Navigation für große Bildschirme, ohne hidden wird es doppelt */}
        <div className="hidden lg:flex">
          <Navigation />
        </div>
      </div>
    </div>
  );
};

export default Header;

//hier im Header machen wir Burger Button mit tailwindCss UI -für mobiles Menü; platzieren Navlinks-Icons für User und Cart-für mobiles Menü; platzieren normale Navigation, wird nur bei großen Bildschirmen gezeigt
//testGithub1
