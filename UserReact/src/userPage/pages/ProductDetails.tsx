import * as React from 'react';
import { useState, useEffect } from 'react';

export default function ProductDetails() {
// function handle goes here

    return(
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src={require("../drink/ca-phe-sua-da.jpg")} className="img-fluid rounded-start" />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">
                            Product
                        </h5>
                        <p className="card-text">OKOK</p>
                        <p className="card-text">
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
                            <a href="/cart" className='btn btn-primary text-white'>Add to cart</a>
                            </div>
                        </div>
                        </form>
                        <p />
                        <p className="card-text">
                        Description goes here with a lot of inforamtions
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </div>
                    </div>
                </div>
        </div>

        </>
    )
}