import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
  const [authors, setAuthors] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => {
        setAuthors(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const deleteObj = (id) => {
    axios.delete(`http://localhost:8000/api/author/delete/${id}`)
      .then(res => {
        setAuthors(authors.filter(author => author._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <Link to="/new" className="btn btn-primary">Add an author</Link>
      <table className="table">
        <thead>
          <tr>
            <th>Author</th>
            <th>Action available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <button className="btn btn-sm btn-primary" onClick={() => nav(`/edit/${author._id}`)}>Edit</button>
                <button className="btn btn-sm btn-danger" onClick={() => deleteObj(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
