import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const nav = useNavigate();
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/author/new', {
        name,
      })
      .then((res) => {
        console.log(res);
        nav('/');
      })
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <>
      <form className="container" onSubmit={onSubmitHandler}>
        {errors.map((err, index) => (
          <p key={index} className="text-danger">{err}</p>
        ))}
        <p className='text-center'>Add a new author:</p>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button className="btn btn-secondary" onClick={() => nav('/')}>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Add;
