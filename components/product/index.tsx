import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { Item } from "@/type";
import { BsStarFill } from "react-icons/bs";
import { GrFormAdd } from "react-icons/gr";
import { addToCart } from "@/redux/shopperSlice";
import StarRate from "../utilities/StarRate";
import Details from "./Details";
import ProductBtn from "./ProductBtn";

export default function Products({ productData }: any) {
  const dispatch = useDispatch();
  return (
    <div className='py-6 px-4 grid grid-cols-4 gap-4'>
      {productData?.map((item: Item) => (
        <div
          key={item?._id}
          className='border-[1px] border-gray-300 mb-6 group'>
          {/* --------------------------------------------- */}
          {/* product image */}
          <div className='w-full h-[350px] overflow-hidden p-1'>
            <Image
              className='w-full h-full object-contain scale-100 group-hover:scale-105 duration-300'
              src={item?.image}
              width={300}
              height={250}
              alt={item?.title}
            />
          </div>
          {/* --------------------------------------------- */}
          {/* product details */}
          <div className='px-2 py-4 flex flex-col justify-center'>
            {/* products buttons */}
            <ProductBtn item={item} />
            <Details item={item} />
            <StarRate />
          </div>
        </div>
      ))}
    </div>
  );
}
