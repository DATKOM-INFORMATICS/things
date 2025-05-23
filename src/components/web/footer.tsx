'use client';
import React from 'react';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} Things. Tous droits réservés.</p>
        <div className="flex space-x-4 text-xl">
          <FaTwitter className="hover:text-indigo-500 cursor-pointer" />
          <FaInstagram className="hover:text-indigo-500 cursor-pointer" />
          <FaLinkedin className="hover:text-indigo-500 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
