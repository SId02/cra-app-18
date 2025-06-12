// import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addEmployee,
  updateEmployee,
  deleteEmployee,
  setFormData,
  setSelectedRow,
  setValidationError,
} from './EmployeeSlice';
import { Link } from 'react-router-dom';

const CRUDRT = () => {
  const dispatch = useDispatch();
  
  const { employees, formData, selectedRow, validationError } = useSelector((state) => state.employees);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const validate = () => {
    if (formData.fullName.trim() === '') {
      dispatch(setValidationError(true));
      return false;
    }
    dispatch(setValidationError(false));
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      if (selectedRow === null) {
        // Insert new record
        dispatch(addEmployee(formData));
      } else {
        // Update existing record
        dispatch(updateEmployee({ id: selectedRow.id, data: formData }));
        dispatch(setSelectedRow(null));
      }
      
      // Reset form
      dispatch(setFormData({
        fullName: '',
        empCode: '',
        salary: '',
        city: ''
      }));
    }
  };

  const handleEdit = (employee) => {
    dispatch(setSelectedRow(employee));
    dispatch(setFormData({
      fullName: employee.fullName,
      empCode: employee.empCode,
      salary: employee.salary,
      city: employee.city
    }));
  };

  const handleDelete = (employeeId) => {
    if (window.confirm('Are you sure to delete this record?')) {
      dispatch(deleteEmployee(employeeId));
      
      // Reset form if needed
      dispatch(setFormData({
        fullName: '',
        empCode: '',
        salary: '',
        city: ''
      }));
      dispatch(setSelectedRow(null));
    }
  };

  return (
    <>
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">CRUD Operations</h1>
      </div>
      
      <div className="container pt-5">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="columns is-multiline is-centered">
            <div className="column is-3">
              <div className="field">
                <label className="label">
                  Full Name <span className="has-text-danger">*</span>
                </label>
                <input
                  className={`input ${validationError ? 'is-danger' : ''}`}
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {validationError && (
                  <p className="help is-danger">Full Name is required</p>
                )}
              </div>
            </div>
            
            <div className="column is-3">
              <div className="field">
                <label className="label">EMP Code</label>
                <input
                  className="input"
                  type="text"
                  name="empCode"
                  value={formData.empCode}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="column is-3">
              <div className="field">
                <label className="label">Salary</label>
                <input
                  className="input"
                  type="text"
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="column is-3">
              <div className="field">
                <label className="label">City</label>
                <input
                  className="input"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="column is-12 has-text-centered">
              <button 
                type="submit" 
                className="button is-primary"
              >
                {selectedRow ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-10">
            <table className="table is-fullwidth is-striped is-hoverable">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>EMP Code</th>
                  <th>Salary</th>
                  <th>City</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.fullName}</td>
                    <td>{employee.empCode}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.city}</td>
                    <td>
                      <div className="buttons are-small">
                        <button 
                          className="button is-primary is-light"
                          onClick={() => handleEdit(employee)}
                        >
                          Edit
                        </button>
                        <button 
                          className="button is-danger is-light"
                          onClick={() => handleDelete(employee.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <br />
    <footer className="footer">
                  <div className="content has-text-centered">
                    <Link to="/" className="has-text-link">
                      Back to Home
                    </Link>
                  </div>
                </footer>
    </>
  );
};

export default CRUDRT;