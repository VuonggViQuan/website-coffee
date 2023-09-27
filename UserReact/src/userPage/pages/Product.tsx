import datacf from "../database/data";
import dataTs from "../database/dataTs";
import dataDx from "../database/dataDx";
import Item from "../components/Item";
import { useEffect, useState } from "react";

const Product1 = () => {
  const[products, setProducts] = useState<any[]>([]);
   useEffect(() => {
    fetch("http://localhost:8000/user/products")
    .then(response => response.json()) 
    .then((result) => {
      console.log(result);
      setProducts(result);
    })
  },[])
  return (
    <>
      <h3 className="text-center text-danger fw-bold h1 py-2">Sản Phẩm</h3>

      <section className="container-fluid ">
        <div className="bg-dark py-2">
          <h5 className="text-white m-2">
           <p className="fs-2 text-center fw-bold">Coffee</p>
          </h5>
        </div>
        <div className="row m-1 mt-3">
          {products.filter(prodduct => prodduct.type === "CF").map((item, index) => {
            return (
              <Item
                id = {item.id}
                img={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="container-fluid ">
        <div className="bg-dark py-2">
          <h5 className="text-white m-2">
           <p className="fs-2 text-center fw-bold">Juice</p>
          </h5>
        </div>
        <div className="row m-1 mt-3">
          {products.filter(prodduct => prodduct.type === "NE").map((item, index) => {
            return (
              <Item
                id = {item.id}
                img={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
      <section className="container-fluid ">
        <div className="bg-dark py-2">
          <h5 className="text-white m-2">
           <p className="fs-2 text-center fw-bold">Milk Tea</p>
          </h5>
        </div>
        <div className="row m-1 mt-3">
          {products.filter(prodduct => prodduct.type === "TS").map((item, index) => {
            return (
              <Item
                id = {item.id}
                img={item.image}
                name={item.name}
                description={item.description}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>

    
    </>
  );
};

const Product = () => {
  return (
    <>
      {/* <CartProvider> */}
      {/* <div className=" row g-0 ">
            <div className="col-8" id="product"><Product1 /></div>
            <div className="col" id="cart">
            <h3 className="text-center text-danger h1">Đơn Hàng</h3>
            <hr/><Cart /></div>
            </div> */}

      {/* </CartProvider> */}
      <div>
        <Product1 />
      </div>
    </>
  );
};

export default Product;
