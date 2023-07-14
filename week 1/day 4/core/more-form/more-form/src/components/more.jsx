import React, { useState } from 'react';

function HookForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check form validation
    if (
      firstName.length < 2 ||
      lastName.length < 2 ||
      email.length < 5 ||
      password.length < 8 ||
      password !== confirmPassword
    ) {
      // Set error messages
      setErrors({
        firstName: firstName.length < 2 ? 'First Name must be at least 2 characters' : '',
        lastName: lastName.length < 2 ? 'Last Name must be at least 2 characters' : '',
        email: email.length < 5 ? 'Email must be at least 5 characters' : '',
        password: password.length < 8 ? 'Password must be at least 8 characters' : '',
        confirmPassword: password !== confirmPassword ? 'Passwords do not match' : '',
      });
    } else {
      // Form is valid, perform submit logic
      // ...
      console.log('Form submitted successfully!');
    }
  };

  return (
    <div>
      <h2>Hook Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default HookForm;
