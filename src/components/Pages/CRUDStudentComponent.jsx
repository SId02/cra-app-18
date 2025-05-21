import { useState } from 'react';

const CRUDStudentComponent = () => {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    studentId: '',
    studentName: '',
    marks: '',
    location: '',
    standard: ''
  });
  const [selectedRow, setSelectedRow] = useState(null);
  const [validationError, setValidationError] = useState({
    studentId: false,
    standard: false
  });

  const [notification, setNotification] = useState({
    show: false,
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validate = () => {
    let valid = true;
    let errors = { studentId: false, standard: false };


    const alphanumeric8 = /^[A-Za-z0-9]{8}$/;
    if (!alphanumeric8.test(formData.studentId)) {
      errors.studentId = true;
      valid = false;
    }

    const standardNum = Number(formData.standard);
    if (
      !/^\d+$/.test(formData.standard) || 
      standardNum < 1 ||
      standardNum > 12
    ) {
      errors.standard = true;
      valid = false;
    }

    setValidationError(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      if (selectedRow === null) {

        setStudents(prevStudents => [
          ...prevStudents,
          { ...formData, id: Date.now() }
        ]);
      } else {

        setStudents(prevStudents =>
          prevStudents.map(student =>
            student.id === selectedRow.id ? { ...formData, id: selectedRow.id } : student
          )
        );
        setSelectedRow(null);
      }
      setFormData({
        studentId: '',
        studentName: '',
        marks: '',
        location: '',
        standard: ''
      });
      setValidationError({ studentId: false, standard: false });
    }
  };

  const handleEdit = (student) => {
    setSelectedRow(student);
    setFormData({
      studentId: student.studentId,
      studentName: student.studentName,
      marks: student.marks,
      location: student.location,
      standard: student.standard
    });
  };

  const handleDelete = (studentId) => {
    if (window.confirm('Are you sure to delete this record?')) {
      setStudents(prevStudents =>
        prevStudents.filter(student => student.id !== studentId)
      );
      setFormData({
        studentId: '',
        studentName: '',
        marks: '',
        location: '',
        standard: ''
      });
      setSelectedRow(null);

      setNotification({
        show: true,
        message: 'Student record has been deleted successfully.'
      });
    }
  };

  const closeNotification = () => {
    setNotification({
      show: false,
      message: ''
    });
  };

  return (
    <section className="py-6 section">
      <div className="container pb-5 has-text-centered">
        <h1 className="title">Student Details CRUD</h1>
      </div>

      <div className="container pt-5">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="columns is-multiline is-centered">
            <div className="column is-2">
              <div className="field">
                <label className="label">
                  Student ID <span className="has-text-danger">*</span>
                </label>
                <input
                  className={`input ${validationError.studentId ? 'is-danger' : ''}`}
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  maxLength={8}
                />
                {validationError.studentId && (
                  <p className="help is-danger">
                    Student ID must be exactly 8 alphanumeric characters (letters and numbers only)
                  </p>
                )}
              </div>
            </div>

            <div className="column is-2">
              <div className="field">
                <label className="label">Student Name</label>
                <input
                  className="input"
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="column is-2">
              <div className="field">
                <label className="label">Standard <span className="has-text-danger">*</span></label>
                <input
                  className={`input ${validationError.standard ? 'is-danger' : ''}`}
                  type="number"
                  name="standard"
                  value={formData.standard}
                  onChange={handleInputChange}
                  min={1}
                  max={12}
                  step={1}
                  pattern="\d*"
                />
                {validationError.standard && (
                  <p className="help is-danger">
                    Standard must be a number from 1 to 12 (no alphabets or symbols)
                  </p>
                )}
              </div>
            </div>

            <div className="column is-2">
              <div className="field">
                <label className="label">Marks</label>
                <input
                  className="input"
                  type="text"
                  name="marks"
                  value={formData.marks}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="column is-2">
              <div className="field">
                <label className="label">Location</label>
                <input
                  className="input"
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="column is-12 has-text-centered">
              <button
                type="submit"
                className="button has-background-grey-light"
              >
                {selectedRow ? 'Update' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {notification.show && (
        <div className="container mt-4">
          <div className="notification is-success">
            <button className="delete" onClick={closeNotification}></button>
            {notification.message}
          </div>
        </div>
      )}

      {students.length > 0 && (
        <div className="container mt-5">
          <div className="columns is-centered">
            <div className="column is-10">
              <table className="table is-fullwidth is-striped is-hoverable">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Standard</th>
                    <th>Marks</th>
                    <th>Location</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student) => (
                    <tr key={student.id}>
                      <td>{student.studentId}</td>
                      <td>{student.studentName}</td>
                      <td>{student.standard}</td>
                      <td>{student.marks}</td>
                      <td>{student.location}</td>
                      <td>
                        <div className="buttons ">
                          <button
                            className="button is-primary"
                            onClick={() => handleEdit(student)}
                          >
                            Edit
                          </button>
                          <button
                            className="button is-danger"
                            onClick={() => handleDelete(student.id)}
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
      )}
    </section>
  );
};

export default CRUDStudentComponent;
