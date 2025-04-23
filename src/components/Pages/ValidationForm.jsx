import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ValidationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [notification, setNotification] = useState(null); // State for notifications

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setNotification(null); // Clear notification on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log('Form submitted:', formData);
      setNotification({ message: 'Form submitted successfully!', type: 'is-success' });
      setFormData({ username: '', email: '', password: '' });
    } else {
      setNotification({ message: 'Please correct the errors in the form.', type: 'is-danger' });
    }
  };

  return (
    <>
    
    <div className="container" style={{ marginTop: '2rem' }}>
      <div className="columns is-centered">
        <div className="column is-half">
          <h1 className="title">Validation Form</h1>
          {notification && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className={`input ${errors.username && 'is-danger'}`}
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && <p className="help is-danger">{errors.username}</p>}
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input
                  className={`input ${errors.email && 'is-danger'}`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && <p className="help is-danger">{errors.email}</p>}
            </div>

            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className={`input ${errors.password && 'is-danger'}`}
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && <p className="help is-danger">{errors.password}</p>}
            </div>

            <div className="field">
              <div className="control">
                <button className="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
       <footer className="footer">
              <div className="content has-text-centered">
                <Link to="/" className="has-text-link">
                  Back to Home
                </Link>
              </div>
            </footer>
                  </>
  );
}

export default ValidationForm;