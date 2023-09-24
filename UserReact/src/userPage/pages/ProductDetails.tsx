import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Products from '../interface/Product';
import Product from './Product';
import { json } from 'stream/consumers';

export default function ProductDetails() {
    const [id, setId] = useState<any | null>(0);
    const [data, setData]= useState<Products>({});
    const param = useParams();
    
    useEffect(() => {
    //    setId(param.id);
       fetch("http://localhost:8000/user/product/" + param.id, {
        method: "GET",
        headers: {"Accept":"application/json", "Content-Type": "application/json"}
       }).then((response) => response.json())
         .then((result) => {
            setData(result);
         })
       
    },[param.id]) 
    // console.log(data); 
    return(
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img alt='drinks' src={require(`../drink/${data?.image ? data?.image : "dua-hau.jpg" }`)} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fs-4 fw-bold">
                                {data.name}
                            </h5>
                            <p className="card-text">{data.description}</p>
                            <p className="card-text fw-bold">
                                {data.price}VND
                            </p>
                            <form action="/cart" method="post">
                            <div className="row">
                                <div className="col-auto">
                                <div className="col-auto input-group">
                                    <div className="input-group-text">
                                    Quantity
                                    </div>
                                    <input type="number" min={1} max={10} className="form-control quantity-input" name="quantity" defaultValue={1} />
                                </div>
                                </div>
                                <div className="col-auto">
                                {/* <button className="btn btn-primary text-white" >Add to cart</button> */}
                                <a href="/cart" className='btn btn-success text-white fw-bold'>Add to cart</a>
                                </div>
                            </div>
                            </form>
                            <p />
                        
                        </div>
                    </div>
                </div>
        </div>

        </>
    )
}