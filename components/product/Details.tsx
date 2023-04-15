import React from 'react'

export default function Details({item}:any) {
  return (
    <>
      <div className='flex items-center gap-3'>
        <p className='font-semibold text-lg text-green-700'>${item?.price}</p>
        <p className='text-gray-500 line-through decoration-[1px]'>
          ${item?.oldPrice}
        </p>
      </div>
      {/* --------------------------------------------- */}
      {/* detials */}
      <div className='texts'>
        <p className='text-lg font-semibold py-2'>
          {item?.title.substring(0, 25)}
        </p>
        <p className='text-base text-zinc-500'>
          {item?.description.substring(0, 80)} ...
        </p>
      </div>
    </>
  );
}
