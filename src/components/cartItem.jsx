import React from 'react'

export default function cartItem() {
  return (
   <>
       <p>KISAN SAMRUDDHI (12/16 Battery)</p>
        <div className="flex items-center space-x-2">
            <div className='flex flex-row border-[1px] border-black gap-1 px-2'>
                <button className='font-semibold' type="button">-</button>
                <div className='font-semibold'>00</div>
                <button className='font-semibold' type="button">+</button>
            </div>
            <span className="text-xl">₹3200</span>
            <span className="text-gray-500 line-through">₹3500</span>
            <span className="text-green-600">9% OFF</span>
        </div>
   </>
  )
}
