import Link from "next/link";
import { BsCartX } from "react-icons/bs";

export default function EmptyCard() {
  return (
    <div className='w-full h-[500px] flex flex-col items-center justify-center'>
      <h1 className='text-5xl py-4 text-zinc-600 font-bold'>
        Your cart is empty
      </h1>
      <p className='text-7xl py-4 text-zinc-600 font-bold'>
        <BsCartX />
      </p>
      <p className='text-blue underline underline-offset-4'>
        <Link href='/'>Go to home</Link>
      </p>
    </div>
  );
}
