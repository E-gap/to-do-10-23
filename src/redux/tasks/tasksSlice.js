import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import Notiflix from "notiflix";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    allTasks: [],
  },
  reducers: {
    addTask(state, action) {
      state.allTasks.unshift(action.payload);
      Notiflix.Notify.success("New task has been added", {
        fontSize: "25px",
        width: "500px",
      });
    },
    deleteTask(state, action) {
      state.allTasks = state.allTasks.filter(
        (task) => task.id !== action.payload
      );
      Notiflix.Notify.success("Task has been deleted", {
        fontSize: "25px",
        width: "500px",
      });
    },
    changeTask(state, action) {
      console.log(action.payload);
      state.allTasks = state.allTasks.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });

      Notiflix.Notify.success("Task has been changed", {
        fontSize: "25px",
        width: "500px",
      });
    },
    changeTaskStatus(state, action) {
      state.allTasks = state.allTasks.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.isDone };
        }
        return task;
      });

      Notiflix.Notify.success("Task has been changed", {
        fontSize: "25px",
        width: "500px",
      });
    },
  },
});

const persistConfig = {
  key: "tasks",
  storage,
};

export const { addTask, deleteTask, changeTask, changeTaskStatus } =
  tasksSlice.actions;

export const tasksReducer = persistReducer(persistConfig, tasksSlice.reducer);

// export const tasksReducer = tasksSlice.reducer;
