import React from "react";
import AddTask from "./AddTask/AddTask";
import CompletedTask from "./CompletedTask/CompletedTask";
import MyTask from "./MyTask/MyTask";

const Home = () => {
  return (
    <div className="mt-20">
        <h1 className="text-3xl text-center p-2 bg-slate-200 mb-6">Explore, Create & Manage Tasks...</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 bg-slate-200 p-6 gap-3 mx-4 my-6">
        <AddTask></AddTask>
        <MyTask></MyTask>
        <CompletedTask></CompletedTask>
      </div>
    </div>
  );
};

export default Home;
