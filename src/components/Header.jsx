import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-neutral-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <h1 className="text-xl font-bold">Cinema project</h1>
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
        </div>

        {/* Navigation für große Bildschirme */}
        <div className="hidden lg:flex">
          <Navigation />
        </div>

        {/* Mobiles Menü */}
        {mobileMenuOpen && (
          <div className="bg-neutral-800 text-white py-7  absolute top-20 left-0 right-0  overflow-auto max-h-50 lg:hidden">
            <Navigation />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
