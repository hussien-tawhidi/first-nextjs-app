import { IoMdHeartEmpty } from "react-icons/io";

export default function DetailsButtons() {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-2'>
        <button className='px-2 py-[1px] text-[#004f9a] text-sm border-[1px] border-[#004f9a] rounded-sm'>
          Best seller
        </button>
        <button className='px-2 py-[1px] text-red-600 text-sm border-[1px] border-red-600 rounded-sm'>
          Rollback
        </button>
      </div>
      <IoMdHeartEmpty className='text-gray-600 text-2xl' />
    </div>
  );
}
