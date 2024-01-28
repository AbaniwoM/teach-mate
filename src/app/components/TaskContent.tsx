'use client';
import React from "react";
import type { RootState } from "../GlobalRedux/store";
import { useSelector } from "react-redux";

const Content = () => {
  const tasks = useSelector((state: RootState) => state.tasks)
  console.log(tasks)

  return (
    <div className="top-[1rem] flex-shrink-0">
      <table className="table-fixed text-black ml-[15rem] border-separate">
        <thead className="border text-left px-8 py-4">
          <tr>
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
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{new Date(task.dueDate).toLocaleDateString('en-US')}</td>
              <td>{task.status}</td>
              <td className="flex">
                <button className="px-3 py-2 rounded md:ml-4 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">Edit</button>
                <button className="px-3 py-2 rounded md:ml-2 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-rose-500 hover:bg-rose-400">Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Content;
