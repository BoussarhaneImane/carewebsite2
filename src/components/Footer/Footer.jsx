import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { MdEmojiNature } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoLogoSnapchat } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Acceuil",
    link: "/#",
  },
  {
    title: "Catalogue Produits",
    link: "/#catalogue",
  },
  {
    title: "Fiche Produits",
    link: "/#shop",
  },
  {
    title: "Panier",
    link: "/#panier",
  },
];

const Footer = () => {
  return (
    <div className="bg-white mt-24 shadow-md">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* company details */}
          <div className="flex flex-col items-start text-amber-700">
            <Link to="/" className="flex items-center mb-4">
              <span className="text-xl font-bold mr-2">CareForU</span>
              <MdEmojiNature className="text-3xl text-amber-600" />
            </Link>
            <p className="text-sm italic">“La beauté réside dans la simplicité.” 💫</p>
            <p className="mt-4 text-xs">Yousra Amiri-Makroum & Chaimaa El Hachimi</p>
            <a
              href=""
              target="_blank"
              className="bg-amber-600 text-white py-1.5 px-3 mt-4 rounded-full hover:bg-green-700 transition duration-300 text-xs"
            >
              Contact Us
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <h1 className="text-md font-bold mb-3 text-amber-700">Liens</h1>
              <ul className="space-y-1">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-sm text-amber-700 hover:text-green-700 transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-md font-bold mb-3 text-amber-700">Quick Links</h1>
              <ul className="space-y-1">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-sm text-amber-700 hover:text-green-700 transition duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="flex flex-col">
              <h1 className="text-md font-bold mb-3 text-amber-700">Address</h1>
              <div className="text-sm text-amber-700">
                <div className="flex items-center gap-2">
                  <FaLocationArrow className="text-green-700" />
                  <p>
                    Address: Casa Street, Casablanca, 10014, Morocco
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <FaMobileAlt className="text-green-700" />
                  <p>+91 1234567890</p>
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-2xl text-green-700 hover:text-amber-700 transition duration-300" />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-2xl text-green-700 hover:text-amber-700 transition duration-300" />
                  </a>
                  <a href="https://www.snapchat.com" target="_blank" rel="noopener noreferrer">
                    <IoLogoSnapchat className="text-2xl text-green-700 hover:text-amber-700 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <footer className="text-center py-4 text-amber-700 text-xs">
          &copy; 2024 Full Stack Developer. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Footer;

