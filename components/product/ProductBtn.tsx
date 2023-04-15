import { addToCart } from "@/redux/shopperSlice";
import Link from "next/link";
import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { useDispatch } from "react-redux";

export default function ProductBtn({ item }: any) {
  const dispatch = useDispatch();
  return (
    <div className='flex justify-between py-2'>
      <button
        className='w-20 h-9 bg-blue text-white rounded-full flex gap-1 items-center justify-center hover:bg-[#004f9a]'
        onClick={() =>
          dispatch(
            addToCart({
              _id: item?._id,
              title: item?.title,
              isNew: item?.isNew,
              oldPrice: item?.oldPrice,
              price: item?.price,
              description: item?.description,
              brand: item?.brand,
              category: item?.category,
              image: item?.image,
              quantity: item?.quantity,
            })
          )
        }>
        <span>
          <GrFormAdd className='text-white' />
        </span>
        add
      </button>
      <Link
        href={{
          pathname: `/product-details/${item?._id}`,
          query: {
            _id: item?._id,
            title: item?.title,
            isNew: item?.isNew,
            oldPrice: item?.oldPrice,
            price: item?.price,
            description: item?.description,
            brand: item?.brand,
            category: item?.category,
            image: item?.image,
            quantity: item?.quantity,
          },
        }}
        as={`product-details/${item?._id}`}>
        <button className='w-24 h-9 bg-white border-[1px] border-black text-black rounded-full flex items-center justify-center gap-1 hover:bg-black hover:text-white duration-300'>
          {" "}
          <span>
            <GrFormAdd />
          </span>
          Detials
        </button>
      </Link>
    </div>
  );
}
