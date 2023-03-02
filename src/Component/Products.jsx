import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink } from "react-router-dom";



const Products = ({ addToCart }) => {
    // const cartFromLocalStorage=JSON.parse(localStorage.getItem("cart")) // "[]"

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    // const [cart, setCart] = useState(cartFromLocalStorage || [])

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/products",
        })

            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));

    }, []);


    // const addToCart = (e, data) => {
    //     e.preventDefault();
    //     setCart([...cart, { ...data, quantity: 1 }])
    //     alert();
    // }
    // useEffect(()=>{
    //     localStorage.setItem("cart",JSON.stringify(cart));
    //   },[cart]);


    return (
        <>

            <div className="jumbotron jumbotron-fluid mt-2" style={{
                backgroundImage: `url("https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
                , height: "250px"
            }}>
                <div class="container">
                    <div style={{ color: "#FFC300" }} className="text text-center">
                        <h1 className="display-4">Just hurry up limited offer!</h1>
                        <h1>Products</h1>
                    </div>

                </div>
            </div>

            {loading && (
                <div>
                    {" "}
                    <h1>Loading...</h1>
                </div>
            )}


            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="prod_heading text-center">-- NEW ARRIVAL! --</h2>
                        <p className="prod_para text-center">We love to tell our successful far far away, behind the word mountains, far from <br></br> the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
            </div>

            <div class="container mt-5 mb-5 mt-5">
                <div className="row g-2">

                    {data.map((product) => (

                        <div className="col-md-4 d-flex justify-content-center mt-5">
                            <div key={product.id} className="card p-2"> <div className="text-center">
                                <img src={product.image} className="img-fluid" width="200" />
                            </div>
                                <div className="content">
                                    <div className="d-flex justify-content-between align-items-center"> <span className="category">{product.category}</span> <span className="price">${product.price}</span> </div>
                                    <p>{product.title}</p>

                                    <div className="buttons d-flex justify-content-center"> <NavLink to={`/product/${product.id}`} className="btn btn-outline-primary mr-1">Details</NavLink> <NavLink onClick={(e) => addToCart(e, product)} className="btn btn-primary">Add to cart</NavLink> </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>






            <div className="jumbotron jumbotron-fluid mt-5" style={{
                backgroundImage: `url("https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
            }}>
                <div class="container">
                    <span className="banner"><b style={{ color: "#FFC300" }}>45%</b> OFF
                        SALE</span>
                    <h1 className="display-4">Just hurry up limited offer!</h1>
                    <p className="lead">Separated they live in Bookmarksgrove right at the <br></br> coast of the Semantics, a large language ocean.</p>
                    <button className="btn_2 btn btn-primary btn-lg" type="button">Shop Now</button>
                    <button className="btn_1 btn btn btn-lg ml-3" type="button">Read more</button>

                </div>
            </div>

            {/* newsletter */}
            <footer style={{ backgroundColor: "#FFC300" }} className=" text-center text-white mt-5 mb-5">
                <div className="container p-5 pb-0">
                    <section className="">
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>

                                <div className="col-md-5 col-12">
                                    <div clclassNameass="form-outline form-white mb-4">
                                        <input type="email" id="form5Example29" placeholder="Email address" class="form-control" />
                                        {/* <label class="form-label" for="form5Example29">Email address</label> */}
                                    </div>
                                </div>

                                <div className="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </footer>

        </>
    );
}
export default Products;