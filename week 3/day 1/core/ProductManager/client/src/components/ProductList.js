import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
    
const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteObj = (Id) => {
        axios.delete('http://localhost:8000/api/product/delete/' + Id)
            .then(res => {
                removeFromDom(Id)
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>All Products:</h2>
            {props.products.map( (product, i) =>
                <p key={i}> 
                    <Link to={`/product/${product._id}`} activeClassName="active">{product.title}</Link> | 
                    <Link to={"/product/edit/" + product._id}>Edit</Link> | 
                    <button onClick={(e)=>{deleteObj(product._id)}}>Delete</button>
                </p>
            )}
        </div>
    )
}

export default ProductList;
