import React from 'react';
import { Link } from 'react-router-dom';

const JoinAsTutor = () => {
  return (
    <div className='bg-[#fefae0] dark:bg-gray-900 pt-10 pb-10'>
    <div className="w-11/12 mx-auto my-12  p-8 rounded-xl text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Are You a Tutor?</h2>
      <p className="mb-6">Join our platform to reach thousands of eager learners across the globe.</p>
      <Link to="/add-tutorials">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">
          Start Teaching
        </button>
      </Link>
    </div>
    </div>

  );
};

export default JoinAsTutor;