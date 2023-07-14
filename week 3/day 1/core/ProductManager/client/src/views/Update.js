import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams,useNavigate } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const nav = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [id]);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/update/' + id, {
            title,
            price,
            description
        })
            .then(res => {console.log(res);nav("/product/")})
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update {title}</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

