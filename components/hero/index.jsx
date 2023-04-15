import Image from "next/image";
import HeroSlider from "./HeroSlider";
import { bannerImg } from "@/public/assets/images";
import ButtonPrimary from "../ButtonPrimary";

export default function index() {
  return (
    <div className='w-full bg-white px-4 py-6 flex gap-4'>
      <div className='w-2/3 rounded-lg h-[410px] shadow-bannerShadow relative'>
        <HeroSlider />
      </div>
      <div className='w-1/3 border-[1px] border-gray-200 rounded-lg shadow-bannerShadow p-4 flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold text-black'>
            Flash Pick of the day
          </h2>
          <p className='text-base text-zinc-600 underline underline-offset-2'>
            View All
          </p>
        </div>
        <Image src={bannerImg} alt='hot sell' className='h-60 object-cover ' />
        <ButtonPrimary btnText='Options' />
        <p className='text-lg text-black font-semibold'>From 199.99</p>
        <p className='text-base text-gray-500'>
          TV Stand Cabinet For Living Room ...
        </p>
      </div>
    </div>
  );
}
