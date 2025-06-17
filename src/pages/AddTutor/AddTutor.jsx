import React from 'react';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Swal from 'sweetalert2';

const AddTutor = () => {
    const { user } = useAuth();

    const handleAddATutor = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // // process salary range data
        // const { min, max, currency, ...newTutor } = data;
        // newTutor.salaryRange = { min, max, currency }

        // // process requirements
        // const requirementsString = newTutor.requirements;
        // const requirementsDirty = requirementsString.split(',')
        // const requirementsClean = requirementsDirty.map(req => req.trim());
        // newTutor.requirements = requirementsClean;

        // // process responsibilities
        // newTutor.responsibilities = newTutor.responsibilities.split(',').map(res => res.trim())

        // newTutor.status = "active";

        // console.log(newTutor)

        // save Tutor to the database
        axios.post('https://language-tutor-server.vercel.app/tutors', data)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "This new Tutor has been saved and published.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
          <div className="max-w-xl mx-auto mt-10 mb-10 p-6 bg-base-100 dark:bg-neutral rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-base-content dark:text-white">
        Add a Tutorial
      </h2>
      <form onSubmit={handleAddATutor} className="space-y-4">
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

export default AddTutor;