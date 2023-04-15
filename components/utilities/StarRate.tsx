import { BsStarFill } from 'react-icons/bs';

export default function StarRate() {
  return (
    <div className='flex gap-2 items-center text-sm mt-2'>
      <div className='flex items-center text-sm gap-1'>
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <p>25</p>
      </div>
    </div>
  );
}
