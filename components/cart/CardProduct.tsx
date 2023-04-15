import Image from "next/image";
import { TfiReload } from "react-icons/tfi";
import FormatePrice from "../FormatePrice";
import { useDispatch } from "react-redux";
import CardBtn from "./CardBtn";

export default function CardProduct({ item }: any) {
  const dispatch = useDispatch();
  return (
    <div className='flex items-center shadow-lg justify-between gap-4 border-b-[1px] pb-4 px-4'>
      <div className='w-3/4 flex items-center gap-2'>
        <Image
          className='w-32'
          width={500}
          height={500}
          src={item?.image}
          alt={item?.title}
        />
        <div className='text-base text-zinc-900'>
          <h2>{item?.title}</h2>
          <p className='text-sm text-zinc-500'>{item?.description}</p>
          <p className='text-sm text-zinc-500'>Price : ${item?.price}</p>
          <p className='text-sm text-zinc-500 flex items-center gap-1'>
            <span className='bg-blue rounded-full text-white text-xs w-4 h-4 flex items-center justify-center'>
              <TfiReload />
            </span>
            Free 30-days return
          </p>
          <CardBtn item={item} />
        </div>
      </div>
      <div className='w-1/4 text-right flex flex-col items-end gap-1'>
        <p className='font-semibold text-xl text-[#2a8703]'>
          <FormatePrice amount={item?.quantity * item?.price} />
        </p>
        <p className='text-sm line-through text-zinc-500'>
          <FormatePrice amount={item?.quantity * item?.oldPrice} />
        </p>
        <div className='flex item-center text-xs gap-2'>
          <p className='bg-green-200 text-[8px] uppercase px-2 py-[1px]'>
            You save
          </p>
          <p className='text-[#2a8703] font-semibold'>
            <FormatePrice
              amount={
                item?.oldPrice * item?.quantity - item?.price * item?.quantity
              }
            />
          </p>
        </div>
      </div>
    </div>
  );
}
