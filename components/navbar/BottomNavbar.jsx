import { phoneImg } from "@/public/assets/images";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";

export default function BottomNavbar() {
  return (
    <div className='sticky top-20 z-50 mx-auto py-2 px-4 flex items-center justify-between bg-blue text-white'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <Image src={phoneImg} alt='phone image' className='w-6' />
          <p className='text-sm font-semibold'>How do you want your items ?</p>
          <FiChevronDown />
          <span className='w-[1px] h-4 bg-white inline-flex ml-2'></span>
        </div>
        <div className='flex items-center gap-2'>
          <p className='text-sm text-zinc-100'>your address, 12345</p>
          <FaPlaceOfWorship />
          <p className='text-sm text-zinc-100'>your address, 12345</p>
        </div>
      </div>
      <ul className='flex gap-6 text-sm font-semibold'>
        <li className='bottomNavLi'>Deals</li>
        <li className='bottomNavLi'>Easter</li>
        <li className='bottomNavLi'>Gracery & essentials</li>
        <li className='bottomNavLi'>Home</li>
        <li className='bottomNavLi'>Tech</li>
        <li className='bottomNavLi'>Fashio</li>
        <li className='bottomNavLi'>Auto</li>
        <li className='bottomNavLi'>Walmart+</li>
      </ul>
    </div>
  );
}
