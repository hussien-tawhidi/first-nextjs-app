import { BsInfoCircle } from "react-icons/bs";

export default function Purchase() {
  return (
    <div className='text-sm text-black flex flex-col gap-1'>
      <p>
        <span className='font-semibold'>$18/mo </span>
        <span className='font-bold'>WithAffirm </span>
        <span className='underline underline-offset-2'>Learn how</span>
      </p>
      <p className='text-xs text-zinc-500 flex items-center gap-1'>
        Price when purchase online{" "}
        <span>
          <BsInfoCircle />
        </span>
      </p>
    </div>
  );
}
