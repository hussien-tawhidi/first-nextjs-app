import { deleteItem, minusQuantity, plusQuantity } from "@/redux/shopperSlice";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";

export default function CardBtn({ item }: any) {
    const dispatch=useDispatch()
  return (
    <div className='my-3 flex items-center'>
      <button
        className='text-sm underline underline-offset-2 decoration-[1px] text-zinc-600 hover:no-underline hover:text-blue duration-300 mr-5'
        onClick={() =>
          dispatch(
            deleteItem({
              _id: item?._id,
              title: item?.title,
              isNew: item?.isNew,
              oldPrice: item?.oldPrice,
              price: item?.price,
              description: item?.description,
              brand: item?.brand,
              category: item?.category,
              image: item?.image,
              quantity: item?.quantity,
            })
          )
        }>
        Remove
      </button>
      <div className='w-28 h-9 border border-zinc-400 rounded-full text-base font-extrabold text-black flex items-center justify-between px-3'>
        <button
          className='text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'
          onClick={() =>
            dispatch(
              minusQuantity({
                _id: item?._id,
                title: item?.title,
                isNew: item?.isNew,
                oldPrice: item?.oldPrice,
                price: item?.price,
                description: item?.description,
                brand: item?.brand,
                category: item?.category,
                image: item?.image,
                quantity: item?.quantity,
              })
            )
          }
          disabled={item?.quantity === 1}>
          <AiOutlineMinus />
        </button>
        <span className=''>{item?.quantity}</span>
        <button className='text-base w-5 h-5 text-zinc-600 hover:bg-[#74767c] hover:text-white rounded-full flex items-center justify-center cursor-pointer duration-200'>
          <AiOutlinePlus
            onClick={() =>
              dispatch(
                plusQuantity({
                  _id: item?._id,
                  title: item?.title,
                  isNew: item?.isNew,
                  oldPrice: item?.oldPrice,
                  price: item?.price,
                  description: item?.description,
                  brand: item?.brand,
                  category: item?.category,
                  image: item?.image,
                  quantity: item?.quantity,
                })
              )
            }
          />
        </button>
      </div>
    </div>
  );
}
