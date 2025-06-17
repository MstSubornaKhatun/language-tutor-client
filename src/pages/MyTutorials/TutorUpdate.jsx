import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const TutorUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [tutor, setTutor] = useState(null);

    useEffect(() => {
        fetch(`https://language-tutor-server.vercel.app/tutors/${id}`)
            .then(res => res.json())
            .then(data => setTutor(data))
            .catch(err => {
                console.error("Error fetching tutor:", err);
                Swal.fire("Error", "Failed to load tutor data", "error");
            });
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const language = form.language.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedTutor = {
            image,
            language,
            price,
            description
        };

        fetch(`https://language-tutor-server.vercel.app/tutors/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTutor)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0 || data.acknowledged) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Updated!',
                        text: 'Tutor information has been updated successfully.',
                        confirmButtonText: 'OK'
                    }).then(() => {
                        navigate('/my-tutorials');
                    });
                } else {
                    Swal.fire("No Changes", "Nothing was updated.", "info");
                }
            })
            .catch(err => {
                console.error("Update error:", err);
                Swal.fire("Error", "Something went wrong while updating.", "error");
            });
    };

    if (!tutor) {
        return <p className="text-center mt-10 text-xl">Loading...</p>;
    }

    return (
        <div className="w-10/12 mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-5 text-center">Update Tutor Information</h2>
            <form onSubmit={handleUpdate} className="space-y-4 bg-white shadow-lg p-6 rounded-xl">

                {/* name (not editable) */}
                <div className="form-control">
                    <label className="label">Name (not editable)</label>
                    <input
                        type="text"
                        value={tutor.name || ''}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                {/* email (not editable) */}
                <div className="form-control">
                    <label className="label">Email (not editable)</label>
                    <input
                        type="email"
                        value={tutor.email || ''}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                {/* image */}
                <div className="form-control">
                    <label className="label">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        defaultValue={tutor.image}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* language */}
                <div className="form-control">
                    <label className="label">Language</label>
                    <input
                        type="text"
                        name="language"
                        defaultValue={tutor.language}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* price */}
                <div className="form-control">
                    <label className="label">Price</label>
                    <input
                        type="number"
                        name="price"
                        defaultValue={tutor.price}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                {/* description */}
                <div className="form-control">
                    <label className="label">Description</label>
                    <textarea
                        name="description"
                        defaultValue={tutor.description}
                        className="textarea textarea-bordered w-full"
                        required
                    />
                </div>

                {/* review (not editable) */}
                <div className="form-control">
                    <label className="label">Review (not editable)</label>
                    <input
                        type="text"
                        value={tutor.review || 'No review yet'}
                        readOnly
                        className="input input-bordered w-full bg-gray-100"
                    />
                </div>

                <button
                    type="submit"
                    className="btn bg-blue-500 hover:bg-blue-600 text-white mt-4"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default TutorUpdate;