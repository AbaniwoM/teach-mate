'use client';
import React from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector } from "react-redux";

const Content = () => {
  const tasks = useSelector((state: RootState) => state.tasks)
  console.log(tasks)

  return (
    <div className="table-responsive top-[10rem] flex-shrink-0">
      <table className="table text-black mt-[10rem] ml-[22rem] border-separate">
        <thead className="table-light border text-left px-8 py-4">
          <tr className="align-bottom">
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {tasks.map((task, index) => {
            return(
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{new Date(task.dueDate).toLocaleDateString('en-US')}</td>
            </tr>)
          })} */}
          {!!tasks?.length && tasks.map((task, index) => 
            <tr key={index}>
              <td>{task.id}</td>
              <td className="align-top w-[2rem]">{task.title}</td>
              <td className="w-[3rem]">{task.description}</td>
              <td className="w-[5rem]">{new Date(task.dueDate).toLocaleDateString('en-US')}</td>
              <td className="w-[5rem]">{task.status}</td>
              <div className="flex w-[10rem]">
                <button className="px-3 py-2 rounded md:ml-4 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">Edit</button>
                <button className="px-3 py-2 rounded md:ml-2 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-rose-500 hover:bg-rose-400">Delete</button>
              </div>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
