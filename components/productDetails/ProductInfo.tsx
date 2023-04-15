import React from 'react'
import { BsStarFill } from 'react-icons/bs';

export default function ProductInfo({product}:any) {
  return (
    <div className='flex flex-col gap-1'>
      <p className='text-sm underline underline-offset-4'>{product?.brand}</p>
      <p className='text-xl font-semibold text-black'>{product?.title}</p>
      <p className='text-base text-zinc-500'>{product?.description}</p>
      {/* star  */}

      <div className='flex items-center text-sm gap-1'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <p>25</p>
      </div>

      {/* ---------- */}
      <div className='flex items-end gap-2'>
        <p className='font-semibold text-xl text-[#2a8703]'>
          ${product?.price}
        </p>
        <p className='text-gray-500 line-through decoration-[1px]'>
          {product?.oldPrice}
        </p>
      </div>
    </div>
  );
}
