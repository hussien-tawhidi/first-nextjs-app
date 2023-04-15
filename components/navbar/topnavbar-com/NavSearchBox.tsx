import { IoMdSearch } from "react-icons/io";
export default function NavSearchBox() {
  return (
    <div className='h-10 flex flex-1 relative'>
      <input
        type='text'
        className='h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-150'
        placeholder='Search everything in here ...'
      />
      <span className='absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-xl'>
        <IoMdSearch />
      </span>
    </div>
  );
}
