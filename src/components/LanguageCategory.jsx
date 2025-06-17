import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { BsClockFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

const LanguageCategory = () => {
  const [languages, setLanguages] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch("https://language-tutor-server.vercel.app/all-tutors")
      .then((res) => res.json())
      .then((data) => {
        const uniqueLanguages = [
          ...new Set(data.map((t) => t.language.trim().toLowerCase())),
        ];

        const capitalizedLanguages = uniqueLanguages
          .map((lang) => lang.charAt(0).toUpperCase() + lang.slice(1))
          .slice(0, 9);

        setLanguages(capitalizedLanguages);
      });
  }, []);

  const handleClick = (language) => {
    if (!user) {
      navigate("/auth/login");
    } else {
      navigate(`/language-tutors/${language}`);
    }
  };

  return (
    <div className="bg-[#fefae0] dark:bg-gray-900 py-12">
      <div className="w-11/12 mx-auto px-4">
        <h2 className="text-xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-white">
          Discover the Perfect Tutor for Your Learning Journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              onClick={() => handleClick(lang)}
              className="border border-gray-300 dark:border-gray-700 rounded-xl p-5 flex justify-between items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 shadow-sm dark:shadow-md"
            >
              <div className="flex gap-3 items-center text-gray-800 dark:text-white">
                <BsClockFill className="text-lg" />
                <span className="font-semibold text-lg">{lang}</span>
              </div>
              <FaArrowRight className="text-gray-500 dark:text-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageCategory;