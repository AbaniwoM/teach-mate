'use client';

import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./Features/TaskReducer";

export const store = configureStore({
    reducer: {
      tasks: TaskReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;