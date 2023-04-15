import Link from "next/link";
import { useEffect, useState } from "react";
import { BsMinecartLoaded } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function TopNavCartIcon() {
  const selectProduct = useSelector(
    (state: any) => state?.shopper?.productData
  );

  const [totalAmt, setTotalAmt] = useState("");

  useEffect(() => {
    let price = 0;
    selectProduct?.map((item: any) => {
      price += item?.price * item?.quantity;
      return price;
    });
    setTotalAmt(price?.toFixed(2));
  }, [selectProduct]);
  return (
    <Link
      href='/card'
      className='flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative'>
      <BsMinecartLoaded className='text-2xl' />
      <p className='text-[10px]'>${totalAmt}</p>
      <span className='absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center text-xs'>
        {selectProduct <= 0 ? "0" : selectProduct?.length}
      </span>
    </Link>
  );
}
