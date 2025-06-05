const AddTutorials = () => {
  return (
    <div className="max-w-xl mx-auto mt-10 mb-10 p-6 bg-base-100 dark:bg-neutral rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-base-content dark:text-white">Add a Tutorial</h2>
      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="input input-bordered w-full bg-base-100 text-base-content"
        />
        <input
          type="email"
          name="email"
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