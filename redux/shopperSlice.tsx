import { StoreProduct, UserInfo } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface shopperState {
  productData: StoreProduct[];
  userInfo: null | UserInfo;
}

{
  /* <Toaster position='top-center' reverseOrder={false} />; */
}

const initialState: shopperState = {
  productData: [],
  userInfo: null,
};

export const shopperSlice = createSlice({
  name: "shopper",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state?.productData?.find(
        (item: StoreProduct) => item?._id === action?.payload?._id
      );

      if (item) {
        item.quantity += action?.payload?.quantity;
        toast.success(`${item?.title} Successfully Increment!`); // alert("already");
      } else {
        state?.productData?.push(action?.payload);
        toast.success(`${action?.payload?.title} Successfully Added!`); // alert("already");
      }
    },

    plusQuantity: (state, action) => {
      const item = state?.productData?.find(
        (item: StoreProduct) => item?._id === action?.payload?._id
      );
      if (item) {
        item.quantity++;
      }
    },

    minusQuantity: (state, action) => {
      const item = state?.productData?.find(
        (item: StoreProduct) => item?._id === action?.payload?._id
      );
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item!.quantity--;
      }
    },

    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item?._id !== action.payload._id
      );
      toast.success(`${action?.payload?.title} Product has removed!`);
    },

    resetCart: (state) => {
      state.productData = [];
      toast.success("Card page cleared");
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  plusQuantity,
  minusQuantity,
  deleteItem,
  resetCart,
  addUser,
  removeUser,
} = shopperSlice.actions;
export default shopperSlice.reducer;
