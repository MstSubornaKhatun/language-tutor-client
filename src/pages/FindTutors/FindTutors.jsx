import React, { useEffect, useState } from "react";
import FindTutorCard from "../../components/FindTutorCard";

const FindTutors = () => {
  const [allTutors, setAllTutors] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://language-tutor-server.vercel.app/all-tutors")
      .then((res) => res.json())
      .then((data) => {
        setAllTutors(data);
        setTutors(data);
        setError(null);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load tutors");
      });
  }, []);

  const handleSearch = (e) => {
    const text = e.target.value;
    setSearchText(text);

    const filtered = allTutors.filter((tutor) =>
      tutor.language?.toLowerCase().includes(text.toLowerCase())
    );
    setTutors(filtered);
  };

  return (
    <div>
      <div className="w-11/12 mx-auto flex justify-center items-center my-6">
        <label className="floating-label w-full max-w-xl">
          <input
            type="text"
            value={searchText}
            onChange={handleSearch}
            placeholder="Search by language"
            className="input input-md w-full"
          />
          <span>Search</span>
        </label>
      </div>

      <div className="w-11/12 mx-auto">
        {error && (
          <p className="text-red-600 text-center font-semibold mb-4">{error}</p>
        )}

        {tutors.length === 0 && !error && (
          <p className="text-center text-gray-500">No tutors found.</p>
        )}

        {tutors.map((tutor) => (
          <FindTutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
};

export default FindTutors;