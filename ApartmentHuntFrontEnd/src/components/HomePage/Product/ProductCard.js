import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="col-md-4 pb-4">
            <div class="card">
                <img src={product.img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.loc}</p>
                    <div className="d-flex justify-content-between">
                        <h3>{product.price}</h3>
                        <Link className="btn text-white" style={{ cursor: 'pointer', backgroundColor: '#275a53' }}>View Details</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProductCard;