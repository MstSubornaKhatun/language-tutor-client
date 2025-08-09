import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <div className="bg-[#faedcd] dark:bg-[#1f1f1f] text-gray-800 dark:text-gray-200">
      {/* Top Section */}
      <footer className="w-11/12 mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Services */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Services</h6>
          <ul className="space-y-2">
            <li><Link className="hover:text-blue-500" to="/find-tutors">Find Tutors</Link></li>
            <li><Link className="hover:text-blue-500" to="find-tutors">Add Tutorial</Link></li>
            <li><Link className="hover:text-blue-500" to="/my-booking-tutors">Book Tutor</Link></li>
            <li><Link className="hover:text-blue-500" to="/my-tutorials">My Tutorials</Link></li>
          </ul>
        </div>
        {/* Company */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Company</h6>
          <ul className="space-y-2">
            <li><Link className="hover:text-blue-500" to="">About Us</Link></li>
            <li><Link className="hover:text-blue-500" to="">Contact</Link></li>
            <li><Link className="hover:text-blue-500" to="">Careers</Link></li>
            <li><Link className="hover:text-blue-500" to="">Support</Link></li>
          </ul>
        </div>
        {/* Legal */}
        <div>
          <h6 className="text-lg font-semibold mb-3">Legal</h6>
          <ul className="space-y-2">
            <li><Link className="hover:text-blue-500" to="">Terms & Conditions</Link></li>
            <li><Link className="hover:text-blue-500" to="">Privacy Policy</Link></li>
            <li><Link className="hover:text-blue-500" to="">Cookie Policy</Link></li>
          </ul>
        </div>
      </footer>
      

      {/* Bottom Section */}
      <footer className="border-t border-gray-300 dark:border-gray-700 py-4 w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <div className="flex items-center gap-2 text-sm">
          <img src="https://i.ibb.co/DDVbbtHp/Screenshot-2025-06-03-183615.png" alt="Logo" className="w-7 h-7" />
          <p>© {new Date().getFullYear()} Language Exchange. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <Link to="" className="hover:text-blue-600" aria-label="Facebook">
            <FaFacebookF />
          </Link>
          <Link to="" className="hover:text-sky-400" aria-label="Twitter">
            <FaTwitter />
          </Link>
          <Link to="" className="hover:text-blue-700" aria-label="LinkedIn">
            <FaLinkedinIn />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
