import React from 'react'
import Order from "../components/order"

export default function orders() {
  return (
    <div className='w-full mx-auto md:4/5 lg:w-3/4 px-5 py-16'>
      <h1 className='text-3xl lg:text-4xl font-semibold pt-16 pb-10'>My Orders</h1>
        <Order/>
        <Order/>

    </div>
  )
}
