import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const MyTaskDetails = () => {
  const { user } = useContext(AuthContext);
  const [dailyTasks, setDailyTasks] = useState([]);

  useEffect(() => {
    fetch(
      `https://tasklab-server.vercel.app/allTasks/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setDailyTasks(data);
        console.log(data);
      });
  }, [user?.email]);

  const handleCompleted = (id) => {
    fetch(`https://tasklab-server.vercel.app/completedTasks/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Task Completed successfully.");
        }
      });
  };

  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 my-6">
        {dailyTasks.map((tasks) => (
          <div
            className="bg-slate-200 lg:mx-0 mx-3"
            key={tasks._id}
          >
            <img className="w-full h-40" src={tasks.img} alt="" />
            <h3 className="text-xl my-4 px-2 text-center font-bold text-slate-800">
              {tasks.taskTitle}
            </h3>
            <p className="font-normal text-slate-800 px-2 mb-2">
              {tasks.description}
            </p>
            <div className="flex justify-center">
              <Link to="/completedTaskDetails">
                {" "}
                {tasks?.role === "taskCompleted" ? (
                  <>
                    <h3 className="text-white bg-blue-900 font-medium text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Completed
                    </h3>{" "}
                  </>
                ) : (
                  <button
                    className="text-white bg-slate-800 hover:bg-slate-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    onClick={() => handleCompleted(tasks._id)}
                  >
                    Complete
                  </button>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTaskDetails;