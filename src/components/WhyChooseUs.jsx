// WhyChooseUs.jsx
import React from 'react';
import { FaShieldAlt, FaUsers, FaClock, FaStar } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className=" dark:bg-gray-800 py-12 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
          <FaShieldAlt className="text-4xl text-indigo-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Verified Tutors</h4>
          <p className="text-gray-600 dark:text-gray-300">We ensure every tutor is authenticated and expert in their field.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
          <FaUsers className="text-4xl text-green-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">10K+ Learners</h4>
          <p className="text-gray-600 dark:text-gray-300">Thousands of users trust us for their language learning journey.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
          <FaClock className="text-4xl text-orange-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Flexible Scheduling</h4>
          <p className="text-gray-600 dark:text-gray-300">Book tutors at your convenient time, 24/7 availability.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 text-center">
          <FaStar className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h4 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Top Rated</h4>
          <p className="text-gray-600 dark:text-gray-300">Our tutors consistently receive great feedback and reviews.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 