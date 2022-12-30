import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CompletedTaskDetails = () => {
  const [dailyTasks, setDailyTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://tasklab-server.vercel.app/completedTasks/taskCompleted`
    )
      .then((res) => res.json())
      .then((data) => {
        setDailyTasks(data);
        console.log(data);
      });
  }, []);

  const handleDeleteTask = (task) => {
    console.log(task);

    fetch(
      `https://tasklab-server.vercel.app/completedTasks/${task._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert(`${task.taskTitle} deleted successfully`);
          navigate("/completedTaskDetails");
        }
      });
  };
  return (
    <div>
      <div className="my-10 grid lg:grid-cols-3 grid-cols-1 gap-3">
        {dailyTasks.map((tasks) => (
          <div className="bg-slate-200" key={tasks._id}>
            <h3 className="text-xl font-bold tracking-tight text-slate-800 text-center p-3 bg-slate-300">
              {tasks.taskTitle}
            </h3>
            <p className="font-normal text-slate-800 my-4 p-3">
              {tasks.description}
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => handleDeleteTask(tasks)}
                className="text-white bg-slate-800 text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                Delete
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <textarea className="border-slate-400 w-80 h-36 mx-auto my-6" placeholder="Give any comment..."></textarea>
              <div className="flex justify-center p-3">
                <button className="bg-slate-800 text-slate-200 p-2">Submit</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-10 ">
        <Link to="/myTaskDetails">
          <button className="bg-slate-800 text-slate-200 p-2">Not Complete</button>
        </Link>
      </div>
    </div>
  );
};

export default CompletedTaskDetails;