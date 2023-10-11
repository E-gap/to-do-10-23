export const selectAllTasks = (state) => state.tasks.allTasks;

export const selectTotalTasks = (state) => state.tasks.total;

export const selectIsTasksLoading = (state) => state.tasks.isLoading;

export const selectTasksError = (state) => state.tasks.error;

export const selectTasksSortBy = (state) => state.tasks.sortBy;
