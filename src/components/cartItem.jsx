import { useState } from "react"
import React from 'react'

export default function cartItem(props) {

  const [count, setCount] = useState(1) 

  const reduceCount = () => {
    if (count == 0) {
        return
    }else{
        setCount(count-1)
    }
  }
  const increaseCount = () => {
    setCount(count+1)
  }

  return (
   <>
       <p>{props.product.name}</p>
        <div className="flex items-center space-x-2">
            <div className='flex flex-row border-[1px] border-black gap-1 px-2'>
                <button onClick={() => props.handleChange(props.product, "-")} className='font-semibold' type="button">-</button>
                <div className='font-semibold'>{props.product.quantity}</div>
                <button onClick={() => props.handleChange(props.product, "+")} className='font-semibold' type="button">+</button>
            </div>
            <span className="text-xl"></span>
            <span className="text-gray-500">{props.product.amount * props.product.quantity}</span>
            {/* <span className="text-green-600">12% OFF</span> */}
        </div>
   </>
  )
}
