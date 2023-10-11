import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: [],
  },
  reducers: {
    addTask(state, action) {
      console.log(action.payload);
      state.allTasks.unshift(action.payload);
    },
  },
});

const persistConfig = {
  key: "tasks",
  storage,
};

export const { addTask } = tasksSlice.actions;

export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);

// export const tasksReducer = tasksSlice.reducer;
