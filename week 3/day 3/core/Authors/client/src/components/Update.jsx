import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const nav = useNavigate();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/author/' + id)
      .then(res => {
        setName(res.data.name);
      });
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8000/api/author/update/' + id, {
      name,
    })
      .then(res => {
        console.log(res);
        nav('/');
      })
      .catch(err => {
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
      <form className="container" onSubmit={update}>
        {errors.map((err, index) => (
          <p key={index} className="text-danger">{err}</p>
        ))}
        <p>Edit this author:</p>
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
          <button type="submit" className="btn btn-success" onClick={() => { nav('/'); }}>back</button>
          <button className="btn btn-secondary" onClick={() => { nav('/'); }}>Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Update;
