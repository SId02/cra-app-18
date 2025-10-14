import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: {
    employees: [],
    formData: {
      fullName: '',
      empCode: '',
      salary: '',
      city: ''
    },
    selectedRow: null,
    validationError: false,
  },
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    addEmployee(state, action) {
      state.employees.push({ ...action.payload, id: Date.now() });
    },
    updateEmployee(state, action) {
      const { id, data } = action.payload;
      const index = state.employees.findIndex(emp => emp.id === id);
      if (index !== -1) {
        state.employees[index] = { ...data, id };
      }
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
    setFormData(state, action) {
      state.formData = action.payload;
    },
    setSelectedRow(state, action) {
      state.selectedRow = action.payload;
    },
    setValidationError(state, action) {
      state.validationError = action.payload;
    },
  },
});

// Export actions
export const {
  setEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setFormData,
  setSelectedRow,
  setValidationError,
} = employeeSlice.actions;

// Export reducer
export default employeeSlice.reducer;