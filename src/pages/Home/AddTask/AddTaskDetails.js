import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const AddTaskDetails = () => {
  const { user } = useContext(AuthContext);

  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
    const taskTitle = form.title.value;

    const description = form.description.value;

    const newService = {
      name,
      taskTitle,
      email,
      img,
      description,
    };
    fetch("http://localhost:5000/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Successfully Addeded Task");
          form.reset();
        }
      })
      .catch((er) => console.error(er));
  };
  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="py-24 mx-auto flex">
          <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg p-8 mx-auto flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-slate-200 bg-slate-800 p-2 text-center text-lg mb-6 font-medium title-font">
              Add Your Task Here
            </h2>

            <form onSubmit={handleAddTask}>
              <div className="relative mb-4">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="name"
                  name="name"
                  required
                  defaultValue={user?.displayName}
                  readOnly
                  className="w-full bg-white rounded border border-gray-300 text-slate-800 outline-none py-1 px-3 leading-8"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="name"
                  name="email"
                  required
                  defaultValue={user?.email}
                  readOnly
                  className="w-full bg-white rounded border border-gray-300 text-slate-800 outline-none py-1 px-3 leading-8"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="title"
                  className="leading-7 text-sm text-gray-600"
                >
                  Title
                </label>
                <input
                  id="title"
                  type="name"
                  name="title"
                  required
                  placeholder="Enter Your Task Title"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-slate-800 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="img"
                  className="leading-7 text-sm text-gray-600"
                >
                  Image
                </label>
                <input
                  id="img"
                  type="name"
                  name="img"
                  required
                  placeholder="Enter Your Task Image URL"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-slate-800 outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Description
                </label>
                <textarea
                  id="message"
                  name="description"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-slate-800 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddTaskDetails;
