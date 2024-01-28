'use client'

import { createSlice } from "@reduxjs/toolkit";
import { taskList } from "../../Data";

const taskSlice = createSlice({
    name: "tasks",
    initialState: taskList,
    reducers: {
       addTask: (state, action) => {
           state.push(action.payload)
       }
    }
})

export const {addTask} = taskSlice.actions;
export default taskSlice.reducer;