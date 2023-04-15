import { ship1Img, ship2Img, ship3Img } from "@/public/assets/images";
import Image from "next/image";

export default function DeliveryOptions() {
  return (
    <div className=''>
      <p className='text-base font-semibold'>How do you want your item ?</p>
      <div className='w-full grid grid-cols-3 gap-4 text-xs'>
        {/* singlr */}
        <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2'>
          <Image src={ship1Img} className='w-10' alt='Shipping image' />
          <p>Shipping</p>
          <p>Tomorrow</p>
          <p>Free</p>
        </div>
        {/* singlr */}
        <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2'>
          <Image src={ship2Img} className='w-10' alt='Shipping image' />
          <p>Pickup</p>
          <p>Tomorrow</p>
          <p>Free</p>
        </div>
        {/* singlr */}
        <div className='w-full border border-zinc-400 rounded-md flex flex-col items-center justify-center p-2'>
          <Image src={ship3Img} className='w-10' alt='Shipping image' />
          <p>Delivery</p>
          <p>Tomorrow</p>
        </div>
      </div>
    </div>
  );
}
