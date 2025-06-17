import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const AddTutorials = () => {
    const { user } = useAuth();
  const handleAddTutor = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTutor = Object.fromEntries(formData.entries());
    console.log(newTutor);


    // send Tutor data to the db
    fetch("http://localhost:3000/tutors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTutor),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added successfully.");

          Swal.fire({
            title: "Tutor added successfully!",
            icon: "success",
            draggable: true,
          });

            form.reset()
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 bg-base-100 dark:bg-neutral rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-base-content dark:text-white">
        Add a Tutorial
      </h2>
      <form onSubmit={handleAddTutor} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <input
          type="email"
          name="email"
              defaultValue={user.email} 
          placeholder="Email"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <input
          type="text"
          name="photo"
          placeholder="Image URL"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <input
          type="text"
          name="language"
          placeholder="Language"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <textarea
          name="description"
          placeholder="Description"
          className="textarea textarea-bordered w-full bg-base-100 text-base-content"
        ></textarea>
        <button className="btn btn-primary w-full">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorials;
