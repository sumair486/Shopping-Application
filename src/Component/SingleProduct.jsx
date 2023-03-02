import React from "react";
import { useParams } from "react-router";
import { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";



const SingleProduct=({addToCart})=>{

    const {id}=useParams();
    const [product,setProduct]=useState([]);
    const [loading,setLoading]=useState(false);
    


    useEffect(()=>{
        const getProduct=async()=>{
            setLoading(true);
            const response=await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading=()=>{
        return(
            <>
            <h2>{product.title}</h2>

                Loading..
            </>
        )
    }

    const ShowProduct=()=>{
        return(
            <>
            {/* <h2>{product.title}</h2> */}
            
            <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" style={{width:"50%"}} src={product.image} alt="..." /></div>
                    <div className="col-md-6">
                        {/* <div class="small mb-1">SKU: BST-498</div> */}
                        <h1 className="title-head display-5 fw-bolder">{product.title}</h1>
                        <div className="fs-5 mb-5">
                            <span style={{ fontSize:"30px",fontWeight:"bolder" }} className="text-decoration-line-through">${product.price}</span>
                           <br></br> <span className="cat">{product.category}</span>
                           <br></br> <span className="cat">Rating: {product.rating && product.rating.rate}</span><span><i className="fa fa-star"></i></span>

                        </div>
                        <p className="lead">{product.description}</p>
                        <div className="d-flex">
                            {/* <input className="form-control text-center me-3" id="inputQuantity" type="num" value="1" style={{ width:"3rem" }} /> */}
                            <NavLink onClick={(e) => addToCart(e, product)}  className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

            </>
        )
    }


    return(
        <>
        {/* <h1>I am single page product</h1> */}
        <div className="container">
            <div className="row">
                {loading ? <Loading/> : <ShowProduct/>}
            </div>
        </div>
        </>
    );
} 

export default SingleProduct;