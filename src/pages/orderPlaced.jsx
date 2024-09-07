import React from 'react'
import { Link } from 'react-router-dom'

export default function orderPlaced() {
  return (
    <div className="">
      <div className="flex flex-col w-screen h-screen justify-center items-center gap-10">
        <h1 className='font-bold text-4xl text-center'>Your Order Placed !</h1>
        <Link to="/all-products" className=' bg-orange-500 py-2 px-4 text-white font-semibold rounded-xl'>Continue Shopping</Link>
      </div>
    </div>
  )
}
