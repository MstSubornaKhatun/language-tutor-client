import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const TutorLists = ({ tutorsCreatedByPromise }) => {
  const [tutors, setTutors] = useState([]);


  useEffect(() => {
    tutorsCreatedByPromise.then(data => {
      setTutors(data);
    });
  }, [tutorsCreatedByPromise]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://language-tutor-server.vercel.app/tutors/${_id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount) {
            Swal.fire("Deleted!", "Tutorial has been deleted.", "success");
            const remainingTutor = tutors.filter(t => t._id !== _id);
            setTutors(remainingTutor);
          }
        });
      }
    });
  };


  return (
    <div className="w-11/12 mx-auto py-10">
      {tutors.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16">
          <img
            src="https://i.ibb.co/YFM7FD7x/Screenshot-2025-06-16-182755.png"
            alt="No Tutorials"
            className="w-96 h-96 mb-6 rounded-2xl"
          />
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            No Tutorials Found
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            You haven’t added any tutorials yet. Start by adding one now! Please return to 
              <Link to="/">
            <button className="underline ml-1">
               home page.
            </button>
          </Link>
          </p>
          <Link to="/add-tutorials">
            <button className="px-5 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition">
              Add Tutorial
            </button>
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop View */}
          <div className="hidden md:block overflow-x-auto">

                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        My Tutorials
      </h2>
            <table className="table table-zebra w-full text-sm md:text-base">
              <thead className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Language</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Review</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tutors.map((tutor, index) => (
                  <tr key={tutor._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={tutor.photo}
                        alt={tutor.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                    </td>
                    <td>{tutor.language}</td>
                    <td>${tutor.price}</td>
                    <td className="max-w-xs truncate" title={tutor.description}>
                      {tutor.description}
                    </td>
                    <td>{tutor.review}</td>
                    <td>
                      <div className="flex flex-col gap-2">
                        <Link to={`/tutorUpdate/${tutor._id}`}>
                          <button className="btn w-full btn-xs bg-green-500 hover:bg-green-600 text-white">
                            Update
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(tutor._id)}
                          className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-6">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        My Tutorials
      </h2>
            {tutors.map((tutor) => (
              <div key={tutor._id} className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-4">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {tutor.language}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">
                      ${tutor.price}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-2 text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">Description:</span> {tutor.description}
                </p>
                <p className="text-sm mb-4 text-gray-700 dark:text-gray-200">
                  <span className="font-semibold">Review:</span> {tutor.review}
                </p>
                <div className="flex justify-end gap-2">
                  <Link to={`/tutorUpdate/${tutor._id}`}>
                    <button className="btn btn-sm bg-green-500 text-white hover:bg-green-600">
                      Update
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tutor._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TutorLists;