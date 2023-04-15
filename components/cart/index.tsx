import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCard from "./EmptyCard";
import DeliveryOptions from "../productDetails/DeliveryOptions";
import DetailsButtons from "../productDetails/DetailsButtons";
import { StoreProduct } from "@/type";
import CardProduct from "./CardProduct";
import CartDetails from "./CartDetails";
import { resetCart } from "@/redux/shopperSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
  const cartData = useSelector((state: any) => state?.shopper?.productData);
  console.log(cartData);

  useEffect(() => {
    setProduct(cartData);
  }, [cartData]);
  return (
    <div className='w-full py-10'>
      {cartData?.length <= 0 ? (
        <EmptyCard />
      ) : (
        <div className='w-full flex gap-10 px-4'>
          <div className='w-2/3 flex flex-col gap-5'>
            <h1 className='text-2xl font-bold text-black'>
              Cart {cartData?.length === 1 ? "Item" : "Items"}{" "}
              <span className='font-normal'>{cartData?.length}</span>
            </h1>
            {/* cart content */}
            {/* ----------------- */}
            <div>
              <DeliveryOptions />
              <div className='w-full p-5 rounded-md flex flex-col gap-4'>
                <p className='font-semibold text-sm text-zinc-500'>
                  Sold and Shipping{" "}
                  <span className='text-black font-semibold'>NextJs.com</span>
                </p>
                <DetailsButtons />

                {/* cart product lists */}
                {/* -------------------------------- */}

                {product.map((item: StoreProduct) => (
                  <CardProduct item={item} key={item?._id} />
                ))}
              </div>
              <button
                className='w-44 bg-red-500 text-white h-10 rounded-full text-base font-semibold hover:bg-red-800 duration-200'
                onClick={() => dispatch(resetCart())}>
                Reset Cart
              </button>
            </div>
          </div>
          <div className='w-1/3 p-4 mt-24 h-[500px] border-[1px] border-zinc-400 rounded-md flex flex-col justify-center gap-4'>
            <CartDetails />
          </div>
        </div>
      )}
    </div>
  );
}
