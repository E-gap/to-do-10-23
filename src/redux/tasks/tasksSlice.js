import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.sortBy = action.payload;
    },
  },
});

export const { addTask } = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;
