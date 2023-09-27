import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Products from '../interface/Product';
import Product from './Product';
import { json } from 'stream/consumers';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import userService from '../services/userService';

export default function ProductDetails() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [id, setId] = useState<any | null>(0);
    const [dataProductId, setDataProductId]= useState<Products>({});
    const [dataAllProducts, setDataAllProducts] = useState<Products[]>([]);
    const param = useParams();
    const navigate = useNavigate();

    const handleShowProduct = (id: any) => {
        fetch("http://127.0.0.1:8000/user/product/" + id , {
          method: "POST",
          headers: {"Accept":"application/json","Content-Type": "application/json"}
        }).then((rs) => {
          console.log(rs);  
          navigate(`/details/${id}`);
        })
      }

    useEffect(() => {
        fetch("http://localhost:8000/user/products", {
                method: "GET",
                headers: {"Accept":"application/json", "Content-Type": "application/json"}
            }).then((res) => res.json()).then((result) => {
                console.log(result)
                setDataAllProducts(result);
            })
        fetch("http://localhost:8000/user/product/" + param.id, {
                method: "GET",
                headers: {"Accept":"application/json", "Content-Type": "application/json"}
        }).then((response) => response.json())
            .then((result) => {
                setDataProductId(result);
            })
       
    },[param.id]) 
    return(
        <>
            <div className="card mb-3 p-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img alt='drinks' src={require(`../drink/${dataProductId?.image ? dataProductId?.image : "dua-hau.jpg" }`)} className="img-fluid rounded-start rounded-3 border border-3" />
                        <Carousel responsive={responsive}>
                            {dataAllProducts.map((product, index) => (
                                <div className='mt-3 d-grid ms-3 w-75'>
                                    <a className='border border-1 border-success' href='#' onClick={() => handleShowProduct(product.id)}>
                                        <img style={{ height: 125 }} className='img-fluid img-profile' src={require(`../drink/${product?.image}`)} alt="" />
                                    </a>
                                    <p className='text-secondary fw-bold text-center'>{product.name}</p>  
                                </div> 
                            ))}
                            
                        </Carousel>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title fs-4 fw-bold">
                                {dataProductId.name}
                            </h5>
                            <p className="card-text">{dataProductId.description}</p>
                            <p className="card-text fw-bold">
                                {dataProductId.price}VND
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
                                <a href="/cart" className='btn btn-success text-white fw-bold'>
                                    Add to cart
                                </a>
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