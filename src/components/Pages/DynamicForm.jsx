import { useState } from 'react';

const DynamicForm = () => {
  const [users, setUsers] = useState([
    {
      id: Date.now(),
      firstName: '',
      lastName: '',
      dob: '',
      age: '',
      city: '',
      state: '',
      country: '',
      errors: {},
    },
  ]);

  const addUser = (e) => {
    e.preventDefault();
    setUsers((prevUsers) => [
      ...prevUsers,
      {
        id: Date.now() + Math.random(), // ensures unique ID
        firstName: '',
        lastName: '',
        dob: '',
        age: '',
        city: '',
        state: '',
        country: '',
        errors: {},
      },
    ]);
  };

  const deleteUser = (e, id) => {
    e.preventDefault();
    // Directly filter out the user in React state
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const handleChange = (e, id, field) => {
    const { value } = e.target;
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (user.id === id) {
          const updatedUser = { ...user, [field]: value };
          if (field === 'dob') {
            return calculateAge(updatedUser);
          }
          return updatedUser;
        }
        return user;
      })
    );
  };

  const calculateAge = (user) => {
    if (user.dob) {
      const dob = new Date(user.dob);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      return { ...user, age: age >= 0 ? age : '' };
    }
    return user;
  };

  const validateInput = (user) => {
    let newErrors = {};

    // Validate First Name, Last Name, City, State, Country
    ['firstName', 'lastName', 'city', 'state', 'country'].forEach((field) => {
      if (!user[field] || user[field].trim().length < 2) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least 2 characters.`;
      }
    });

    // Validate DOB and Age
    if (!user.dob) {
      newErrors.dob = 'Please enter a valid date of birth.';
    } else if (user.age < 18) {
      newErrors.dob = 'You must be at least 18 years old.';
    }

    return { ...user, errors: newErrors };
  };

  const handleBlur = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? validateInput(user) : user))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isFormValid = true;
    const validatedUsers = users.map((user) => {
      const validatedUser = validateInput(user);
      if (Object.keys(validatedUser.errors).length > 0) {
        isFormValid = false;
      }
      return validatedUser;
    });
    setUsers(validatedUsers);

    if (isFormValid) {
      console.log('Form is valid and ready to submit!');
      console.log(users);
      // Send data to your API here
    } else {
      console.log('Form has validation errors.');
    }
  };

  return (
    <div className="container is-max-desktop py-5">
      <div className="box p-5">
        <h1 className="title is-4 has-text-centered">User Information Form</h1>
        <form onSubmit={handleSubmit}>
          <div id="user-info-fields">
            {users.map((user, index) => (
              <div key={user.id} className="box p-4 mb-4 user-group">
                <div className="is-flex is-justify-content-space-between is-align-items-center mb-2">
                  <h2 className="title is-5">User #{index + 1}</h2>
                  {users.length > 1 && (
                    <button
                      type="button"
                      className="delete is-medium"
                      onClick={(e) => deleteUser(e, user.id)}
                    ></button>
                  )}
                </div>
                <div className="columns is-multiline">
                  {/* First Name */}
                  <div className="column is-6">
                    <div className="field">
                      <label className="label">First Name</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.firstName ? 'is-danger' : ''} ${!user.errors.firstName && user.firstName.length > 0 ? 'is-success' : ''}`}
                          type="text"
                          placeholder="First Name"
                          value={user.firstName}
                          onChange={(e) => handleChange(e, user.id, 'firstName')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      {user.errors.firstName && (
                        <p className="help is-danger">{user.errors.firstName}</p>
                      )}
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="column is-6">
                    <div className="field">
                      <label className="label">Last Name</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.lastName ? 'is-danger' : ''} ${!user.errors.lastName && user.lastName.length > 0 ? 'is-success' : ''}`}
                          type="text"
                          placeholder="Last Name"
                          value={user.lastName}
                          onChange={(e) => handleChange(e, user.id, 'lastName')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      {user.errors.lastName && (
                        <p className="help is-danger">{user.errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* DOB */}
                  <div className="column is-4">
                    <div className="field">
                      <label className="label">Date of Birth</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.dob ? 'is-danger' : ''} ${!user.errors.dob && user.dob.length > 0 ? 'is-success' : ''}`}
                          type="date"
                          value={user.dob}
                          onChange={(e) => handleChange(e, user.id, 'dob')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-calendar-alt"></i>
                        </span>
                      </div>
                      {user.errors.dob && (
                        <p className="help is-danger">{user.errors.dob}</p>
                      )}
                    </div>
                  </div>

                  {/* Age */}
                  <div className="column is-2">
                    <div className="field">
                      <label className="label">Age</label>
                      <div className="control has-icons-left">
                        <input
                          className="input"
                          type="number"
                          placeholder="Age"
                          value={user.age}
                          readOnly
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-birthday-cake"></i>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* City */}
                  <div className="column is-6">
                    <div className="field">
                      <label className="label">City</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.city ? 'is-danger' : ''} ${!user.errors.city && user.city.length > 0 ? 'is-success' : ''}`}
                          type="text"
                          placeholder="City"
                          value={user.city}
                          onChange={(e) => handleChange(e, user.id, 'city')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-city"></i>
                        </span>
                      </div>
                      {user.errors.city && (
                        <p className="help is-danger">{user.errors.city}</p>
                      )}
                    </div>
                  </div>

                  {/* State */}
                  <div className="column is-6">
                    <div className="field">
                      <label className="label">State</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.state ? 'is-danger' : ''} ${!user.errors.state && user.state.length > 0 ? 'is-success' : ''}`}
                          type="text"
                          placeholder="State"
                          value={user.state}
                          onChange={(e) => handleChange(e, user.id, 'state')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-map-marker-alt"></i>
                        </span>
                      </div>
                      {user.errors.state && (
                        <p className="help is-danger">{user.errors.state}</p>
                      )}
                    </div>
                  </div>

                  {/* Country */}
                  <div className="column is-6">
                    <div className="field">
                      <label className="label">Country</label>
                      <div className="control has-icons-left">
                        <input
                          className={`input ${user.errors.country ? 'is-danger' : ''} ${!user.errors.country && user.country.length > 0 ? 'is-success' : ''}`}
                          type="text"
                          placeholder="Country"
                          value={user.country}
                          onChange={(e) => handleChange(e, user.id, 'country')}
                          onBlur={() => handleBlur(user.id)}
                        />
                        <span className="icon is-small is-left">
                          <i className="fas fa-globe-americas"></i>
                        </span>
                      </div>
                      {user.errors.country && (
                        <p className="help is-danger">{user.errors.country}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="field is-grouped is-justify-content-center mt-4">
            <p className="control">
              <button type="button" className="button is-link is-light" onClick={addUser}>
                Add User
              </button>
            </p>
            <p className="control">
              <button type="submit" className="button is-success">
                Submit
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DynamicForm;