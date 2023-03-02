import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from "react-router-dom";




function Cart({cart}) {


  const navigate = useNavigate();
  



    const refreshPage = ()=>{
        window.location.reload();
     }

  const [CART, setCART] = useState([]);
  const [Total, setTotal] = useState(0);

  
  //remove item

  const removeItemFromCart = (itemId) => {
    let cart = JSON.parse(localStorage.getItem('cart'));

    const index = cart.findIndex(item => item.id === itemId);
  
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));


}

  useEffect(() => {
      setCART(cart)

      // let MyTotal = 0;
      // if (cart !== null) {
      //   cart.forEach(element => {
      //     MyTotal += parseFloat(element.quantity) * parseFloat(element.price)
      //   })
      //   setTotal(parseFloat(MyTotal).toFixed(2))
  
      // }
      
      setCART(cart)


      
  }, [cart])

useEffect(() => {
  const data = window.localStorage.getItem('cart');
  if ( data !== null ) setCART(JSON.parse(data));
}, [])


const clearall=()=>{
  window.localStorage.removeItem('cart');
}









  return (
    
      <div>


                      <div>
                        <div className="container-fluid">
                          <div className="row">
                            
                            <div  className="col-sm-12">

                            <table class="table table-bordered">
  <thead>
    <tr>

      <th scope="col">Image</th>
      <th scope="col">Title</th>
      <th scope="col">Decrease</th>
      <th scope="col">Quantity</th>
      <th scope="col">Increase</th>
      <th scope="col">Item Price</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  {
              CART?.map((cartItem, cartindex) => {
                  return (
  <tbody>
    <tr>
{/* <td className=''>{cartindex.id}</td> */}
      <td><img className='pic img-fluid' src={cartItem.image} width={40} /></td>
      <td><span className='title text text-'> {cartItem.title} </span></td>
      <td> 
        <button className='btn btn-danger'
                              onClick={() => {
                                  const _CART = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                  })

                                  setCART(_CART)
                                  localStorage.setItem("cart", JSON.stringify([..._CART]));

                                  
                              }}
                          >-</button>
        </td>
        <td><span className=''> {cartItem.quantity} </span></td>
        <td>                          
            <button className='btn btn-success'
                              onClick={() => {
                                  const _CART = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                  })
                                  
                                  setCART(_CART)
                                  localStorage.setItem("cart", JSON.stringify([..._CART]));

                              }}
                          >+</button>
                          </td>
        <td>
        <span  className='item-price'> ${parseFloat(cartItem.price * cartItem.quantity).toFixed(2)} </span>
        </td>
        {/* <td onClick={removeFromCart}>Delete</td> */}
      <td>  <button onClick={() => {removeItemFromCart(cartItem.id); refreshPage(); }}><i className='fa fa-trash'></i></button></td>

    </tr>

  </tbody>
  
                    )
                })
            }
                       <tr className="total">
            <th className=''  colspan="6" scope="row">Total</th>
      <td> $ 
      {
                 parseFloat(CART == null ?  0 : CART.map(item => item.price * item.quantity).reduce((total, value) =>  total + value, 0).toFixed(2))
                 
              }
              {/* {Total} */}
      </td>


            </tr>

            <tr className="total">
              <th colSpan='6'>Clear</th>
              {/* <td onClick={()=>clearall()}></td> */}
              <td><button className='btn btn-danger' onClick={()=>{clearall();refreshPage()}}>Clear all</button></td> 
            </tr>
</table>

                      </div>
                      
                      </div>
                      
                          </div>
                          
                        </div>

          
<div className='text text-center mt-3'>
<p>

          <NavLink  to="/checkout" className='btn btn-primary ml-3'>CheckOut</NavLink>
          {/* onClick={() => changeLocation('/checkout')}  */}
          </p>
</div>

          
      </div >
      
  )
}

export default Cart
