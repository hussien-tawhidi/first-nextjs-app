import { IoMdHeart } from "react-icons/io";

export default function MyItems() {
  return (
    <div className='navbarHover'>
      <IoMdHeart />
      <div>
        <p className='text-xs'>Recorder</p>
        <p className='text-base font-semibold mt-1'>My Items</p>
      </div>
    </div>
  );
}
