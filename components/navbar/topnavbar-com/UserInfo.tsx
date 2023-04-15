import { addUser, removeUser } from "@/redux/shopperSlice";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

export default function UserInfo() {
  const dispatch = useDispatch();

  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(removeUser());
    }
  }, [session, dispatch]);

  const userInfo = useSelector((state: any) => state?.shopper?.userInfo);
  console.log(userInfo);
  return (
    <>
      {userInfo ? (
        <div className='navbarHover' onClick={() => signOut()}>
          <Image
            width={500}
            height={500}
            src={userInfo?.image}
            alt={userInfo?.name}
            className='w-10 rounded-full object-cover'
          />
          <div>
            <p className='text-xs'>Sign Out</p>
            <p className='text-base font-semibold mt-1'>{userInfo?.name}</p>
          </div>
        </div>
      ) : (
        <div className='navbarHover' onClick={() => signIn()}>
          <AiOutlineUser />
          <div>
            <p className='text-xs'>Sign in</p>
            <p className='text-base font-semibold mt-1'>Account</p>
          </div>
        </div>
      )}
    </>
  );
}
