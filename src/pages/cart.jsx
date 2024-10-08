import React, {useState, useEffect} from 'react'
import CartItem from '../components/cartItem'
import { useNavigate, Link } from 'react-router-dom'

export default function cart(props) {

    const navigate = useNavigate();

    const [price, setPrice] = useState()
    const [delPrice, setdelPrice] = useState(0)
    
    const handlePrice = () =>{
        let total = 0;
        props.cart.map((product)=>{
            total += product.quantity * product.amount;
        })
        setPrice(total);
    }


    useEffect(()=>{
        handlePrice();
        // handleNavigate();
    })

    const handleNavigate = () =>{
        navigate('/order-placed');
        // window.location.href = "/order-placed" 
    }

    if (props.cart.length<1) {
        return(
            <div className='h-screen w-screen flex flex-col justify-center items-center gap-10'>
                <h1 className='font-bold text-4xl text-center'>Your Cart is Empty! </h1>
                <Link to="/all-products" className=' bg-orange-500 py-2 px-4 text-white font-semibold rounded-xl'>Continue Shopping</Link>
            </div>
        )
    } else {
        return (

    
            <div className="mx-auto px-5 py-32">
           
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    {/* <!-- Coupon/Offer Section --> */}
                    <div className="flex justify-between mb-6">
                        <h1 className="text-3xl font-semibold">Checkout</h1>
                        <div className="flex space-x-4">
                            <button className="py-2 px-4 bg-orange-500 text-white rounded-lg cursor-none">Delivery</button>
                            {/* <button className="py-2 px-4 bg-gray-100 text-gray-800 rounded-lg cursor-pointer">Pick Up</button> */}
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="material-icons text-gray-600">local_offer</span>
                                <p>Coupon/Bank or Wallet Offer</p>
                            </div>
                            <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed">Apply</button>
                        </div>
                    </div>
        
                    {/* <!-- Address Section --> */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="material-icons text-gray-600 font-bold">Delivery Address:</span>
                                <p className=''>Kolkata, BT Road, Sector 1, 700001</p>
                            </div>
                            <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed">Change address</button>
                        </div>
                    </div>
        
                    {/* <!-- Order Instructions Section --> */}
                    <div className="bg-white p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center space-x-2">
                                <span className="material-icons font-bold text-gray-600">*Note</span>
                                <p className='font-semibold'>COD available only !   </p>
                            </div>
                            <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg cursor-not-allowed">Change</button>
                        </div>
                    </div>
                </div>
        
                {/* <!-- Order Summary Section --> */}
                <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <ul className="space-y-4">
                    {props.cart.map((product) => (
                        <li key={product.id} className="flex justify-between items-center">
                            <CartItem  product={product} handleChange={props.handleChange}/>
                        </li>
                    ))}
        
                    </ul>
        
                    <div className=' '>
                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between text-lg">
                                    <span>Item Total</span>
                                    <span>₹{price}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span>Delivery fees</span>
                                    <span>{delPrice>0?"₹"+delPrice:"Free"}</span>
                                </div>
                            </div>
        
                            <div className="mt-6 border-t pt-4">
                                <div className="flex justify-between text-xl font-semibold">
                                    <span>Grand Total</span>
                                    <span>₹{price + delPrice}</span>
                                </div>
                            </div>
                        <button type='button' onClick={handleNavigate} className="mt-8 w-full py-3 bg-orange-500 text-white rounded-lg text-lg">Place Order</button>
                    </div>
        
                </div>
            </div>
            </div>
          )
    }

  
}
