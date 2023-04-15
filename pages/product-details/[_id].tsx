import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shopperSlice";
import DetailsButtons from "@/components/productDetails/DetailsButtons";
import ProductInfo from "@/components/productDetails/ProductInfo";
import Purchase from "@/components/productDetails/Purchase";
import DeliveryOptions from "@/components/productDetails/DeliveryOptions";

export default function ProductDetails() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<any>(false);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setProduct(router?.query);
    setLoading(false);
  }, [router?.query]);

  const _id = Number(product?._id);

  return (
    <Layout title={`${product?.title} | Details`}>
      <div className='w-full bg-white'>
        <div className='flex items-center py-4'>
          <div className='w-2/3 h-full flex items-center justify-center overflow-hidden relative'>
            <img
              src={product?.image}
              alt={product?.title}
              className='w-[80%] cursor-move duration-500'
            />
          </div>
          <div className='w-1/3 h-full flex flex-col gap-2'>
            <p className='p-2 text-[#004f9a] text-sm font-semibold border rounded-md border-gray-500'>
              500+ Bought since yesterday
            </p>
            <div className='px-2 py-4 border border-gray-500 rounded-md flex flex-col gap-6'>
              {/* details buttons */}
              <DetailsButtons />
              <ProductInfo product={product} />
              <Purchase />
              {/* add to card */}
              <div className='border-b-[1px] border-b-zinc-300 pb-4'>
                <button
                  className='w-32 h-10 bg-blue text-white rounded-full hover:bg-[#004f9a] duration-300'
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: product?._id,
                        title: product?.title,
                        isNew: product?.isNew,
                        oldPrice: product?.oldPrice,
                        price: product?.price,
                        description: product?.description,
                        brand: product?.brand,
                        category: product?.category,
                        image: product?.image,
                        // quantity: product?.quantity,
                      })
                    )
                  }>
                  Add to card
                </button>
              </div>
              <DeliveryOptions />
              <p className='font-bold text-xs'>
                Address ,12345{" "}
                <span className='font-normal underline underline-offset-2 ml-1'>
                  Change
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
