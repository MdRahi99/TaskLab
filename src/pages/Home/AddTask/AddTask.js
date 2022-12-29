import React from 'react';
import { Link } from 'react-router-dom';

const AddTask = () => {
    return (
        <div className='bg-slate-800 text-slate-200 p-6 flex flex-col gap-3 items-center justify-center'>
            <h1 className='text-3xl font-serif'>Add Task</h1>
            <Link className='px-6 mt-6 font-semibold hover:bg-slate-700 hover:text-slate-200 py-2 bg-slate-200 text-slate-800 rounded' to="/addTaskDetails">Enter</Link>
        </div>
    );
};

export default AddTask;