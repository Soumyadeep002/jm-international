import React from 'react'
import CartItem from '../components/cartItem'

export default function cart() {
  return (
    <div className="mx-auto px-5 py-32">
   

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
            {/* <!-- Coupon/Offer Section --> */}
            <div className="flex justify-between mb-6">
                <h1 className="text-3xl font-semibold">Checkout</h1>
                <div className="flex space-x-4">
                    <button className="py-2 px-4 bg-orange-500 text-white rounded-lg cursor-pointer">Delivery</button>
                    <button className="py-2 px-4 bg-gray-100 text-gray-800 rounded-lg cursor-pointer">Pick Up</button>
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="material-icons text-gray-600">local_offer</span>
                        <p>Coupon/Bank or Wallet Offer</p>
                    </div>
                    <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg">Apply</button>
                </div>
            </div>

            {/* <!-- Address Section --> */}
            <div className="bg-white p-4 rounded-lg mb-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="material-icons text-gray-600">location_on</span>
                        <p>Add New Address</p>
                    </div>
                    <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg">Add address</button>
                </div>
            </div>

            {/* <!-- Order Instructions Section --> */}
            <div className="bg-white p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <span className="material-icons text-gray-600">note</span>
                        <p>Order Instructions</p>
                    </div>
                    <button className="py-1 px-4 bg-gray-100 text-gray-600 rounded-lg">Add</button>
                </div>
            </div>
        </div>

        {/* <!-- Order Summary Section --> */}
        <div className="bg-white p-6 rounded-lg ">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <ul className="space-y-4">
                <li className="flex justify-between items-center">
                    <CartItem/>
                </li>
                <li className="flex justify-between items-center">
                    <CartItem/>
                </li>
                <li className="flex justify-between items-center">
                    <CartItem/>
                </li>
                <li className="flex justify-between items-center">
                    <CartItem/>
                </li>

            </ul>

            <div className=' '>
                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-lg">
                            <span>Item Total</span>
                            <span>₹14100.00</span>
                        </div>
                        <div className="flex justify-between text-lg">
                            <span>Delivery fees</span>
                            <span>Free</span>
                        </div>
                    </div>

                    <div className="mt-6 border-t pt-4">
                        <div className="flex justify-between text-xl font-semibold">
                            <span>Grand Total</span>
                            <span>₹14100</span>
                        </div>
                    </div>
                <button type='button' className="mt-8 w-full py-3 bg-orange-500 text-white rounded-lg text-lg">Place Order</button>
            </div>

        </div>
    </div>
</div>
  )
}
