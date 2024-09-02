import React from 'react'

export default function cartItem(props) {
  return (
   <>
       <p>{props.product.name}</p>
        <div className="flex items-center space-x-2">
            <div className='flex flex-row border-[1px] border-black gap-1 px-2'>
                <button className='font-semibold' type="button">-</button>
                <div className='font-semibold'>1</div>
                <button className='font-semibold' type="button">+</button>
            </div>
            <span className="text-xl"></span>
            <span className="text-gray-500">{props.product.price}</span>
            <span className="text-green-600">12% OFF</span>
        </div>
   </>
  )
}
