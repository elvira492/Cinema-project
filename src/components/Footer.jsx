import { NavLink } from "react-router-dom";
import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white py-4 w-full z-10 opacity-90 shadow-xl bottom-0 absolute flex justify-between items-center px-8">
      <div className="flex items-center">
        <NavLink to="/" className="text-md font-bold shadow-lg mr-4">
          Fantasy Cinema
        </NavLink>
        <p>Wonder Way 6, Fantasy Harbor</p>
      </div>
      <div className="flex items-center">
        <SocialIcon
          url="https://www.instagram.com/"
          target="_blank"
          bgColor="#ff5a01"
        />

        <SocialIcon
          url="https://www.facebook.com/"
          target="_blank"
          bgColor="#4267B2"
        />
      </div>
    </div>
  );
};

export default Footer;
/* npm i react-social-icons 

https://react-social-icons.com/
bgColor="#ff5a01"
fgColor="#ff5a01"*/
