
//FormValidationUsinguseReducer.jsx
import { useReducer } from 'react';

// Initial state for our form
const initialState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
  isSubmitted: false,
};

// Reducer function to handle state changes
const formReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '', // Clear error when field changes
        },
        isSubmitted: false, // Reset submission status on field change
      };
    case 'SET_ERRORS':
      return {
        ...state,
        errors: action.errors,
        isSubmitted: false,
      };
    case 'SUBMIT_SUCCESS':
      return {
        ...initialState, // Reset form after successful submission
        isSubmitted: true,
      };
    default:
      return state;
  }
};

const FormValidationUsinguseReducer = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { name, email, password, confirmPassword, errors, isSubmitted } = state;

  // Handle input changes
  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_FIELD',
      field: e.target.name,
      value: e.target.value,
    });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      dispatch({ type: 'SET_ERRORS', errors: validationErrors });
    } else {
      dispatch({ type: 'SUBMIT_SUCCESS' });
      // In a real application, you would send this data to a server
      console.log('Form data:', { name, email, password });
    }
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title has-text-centered">Form Validation Using useReducer</h1>
            <div className="box">
              {isSubmitted && (
                <div className="notification is-success">
                  Form submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input
                      className={`input ${errors.name ? 'is-danger' : ''}`}
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>

                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className={`input ${errors.email ? 'is-danger' : ''}`}
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>

                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className={`input ${errors.password ? 'is-danger' : ''}`}
                      type="password"
                      name="password"
                      value={password}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>

                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      className={`input ${errors.confirmPassword ? 'is-danger' : ''}`}
                      type="password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="help is-danger">{errors.confirmPassword}</p>
                  )}
                </div>

                <div className="field">
                  <div className="control">
                    <button type="submit" className="button is-fullwidth">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormValidationUsinguseReducer;