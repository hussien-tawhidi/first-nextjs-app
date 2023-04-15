import { StoreProduct } from "@/type";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormatePrice from "../FormatePrice";
export default function CartDetails({ item }: any) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [saving, setSaving] = useState(0);
  const [totalAmt, setTotalAmt] = useState(0);

  const cartData = useSelector((state: any) => state?.shopper?.productData);

  useEffect(() => {
    let oldPrice = 0;
    let saving = 0;
    let amt = 0;

    cartData?.map((item: StoreProduct) => {
      oldPrice += Number(item?.oldPrice) * item?.quantity;
      saving += Number(item?.oldPrice) - item?.price;
      amt += item?.price * item?.quantity;
      return;
    });

    setTotalPrice(oldPrice);
    setSaving(saving);
    setTotalAmt(amt);
  }, [cartData]);

  return (
    <>
      <button className='bg-blue hover:bg-hoverBg w-full text-white h-10 rounded font-semibold duration-300'>
        Continue to checkout
      </button>
      {/* <p className='text-sm text-center text-red-500 -mt-4 font-semibold'>
        Please sign in for checkout
      </p> */}
      <p className='text-sm text-center'>
        For the best shipping experience ,{" "}
        <span className='underline underline-offset-2 decoration-[1px]'>
          Sign Up
        </span>
      </p>
      <p className='text-sm text-center'>
        Or have already account ,{" "}
        <span className='underline underline-offset-2 decoration-[1px]'>
          Sign in
        </span>
      </p>
      {/* prices */}
      <div className='w-full flex flex-col gap-4 border-b-[1px] border-zinc-200 pb-4'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>
              Subtotal
              <span className='font-normal'>{cartData?.length}</span>
              {cartData?.length === 1 ? "Item" : "Items"}{" "}
            </p>
            <p className='line-through text-zinc-500 text-base'>
              <FormatePrice amount={totalPrice} />
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>Saving</p>
            <p className='text-[#2a8703] font-bold bg-green-100 py-1 px-[2px]'>
              <FormatePrice amount={saving} />
            </p>
          </div>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>Total Amount</p>
            <p className='text-zinc-800 font-normal text-base'>
              <FormatePrice amount={totalAmt} />
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-4 border-b-[1px] border-zinc-200 pb-4'>
        <div className='flex flex-col gap-1'>
          <div className='flex justify-between text-sm'>
            <p>Shipping</p>
            <p className='text-[#2a8703]'>Free</p>
          </div>
          <div className='flex justify-between text-sm'>
            <p className='font-semibold'>Taxes</p>
            <p className='text-zinc-800'>Caculate at checkout</p>
          </div>
        </div>
        <div className='flex items-center justify-between text-sm'>
          <p>Estimate total</p>
          <p className='text-zinc-800 text-lg font-bold'>
            <FormatePrice amount={totalAmt} />
          </p>
        </div>
      </div>
    </>
  );
}
