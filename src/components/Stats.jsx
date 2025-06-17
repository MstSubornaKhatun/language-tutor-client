import React, { useEffect, useState } from "react";

const Stats = () => {
  const [stats, setStats] = useState({
    tutors: 0,
    reviews: 0,
    languages: 0,
    users: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const tutorRes = await fetch("http://localhost:3000/stats/tutors-count");
        const tutorData = await tutorRes.json();

        const langRes = await fetch("http://localhost:3000/stats/languages-count");
        const langData = await langRes.json();

        const reviewRes = await fetch("http://localhost:3000/stats/reviews-count");
        const reviewData = await reviewRes.json();

        const userRes = await fetch("http://localhost:3000/stats/users-count");
        const userData = await userRes.json();

        setStats({
          tutors: tutorData?.count || 0,
          reviews: reviewData?.count || 0,
          languages: langData?.count || 0,
          users: userData?.count || 0,
        });
      } catch (err) {
        console.error("Stats fetch error:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto text-center my-16">
      <div className="bg-blue-100 p-6 rounded-xl  dark:bg-gray-900 dark:text-white">
          <p className="text-xl">{stats.tutors}</p>
        <h3 className="text-xl font-bold">Total Tutors</h3>
      
      </div>
      <div className="bg-green-100 p-6 rounded-xl  dark:bg-gray-900 dark:text-white">
        <p className="text-xl">{stats.reviews}</p>
        <h3 className="text-xl font-bold">Total Reviews</h3>
        
      </div>
      <div className="bg-purple-100 p-6 rounded-xl  dark:bg-gray-900 dark:text-white">
           <p className="text-xl">{stats.languages}</p>
        <h3 className="text-xl font-bold">Languages</h3>
     
      </div>
      <div className="bg-yellow-100 p-6 rounded-xl  dark:bg-gray-900 dark:text-white">
          <p className="text-xl">{stats.users}</p>
        <h3 className="text-xl font-bold">Total Users</h3>

      
      </div>
    </div>
  );
};

export default Stats;