import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from "../Layout/CRUDComponentRT/EmployeeSlice";

const store = configureStore({
  reducer: {
    employees: employeeReducer,
  },
});

export default store;