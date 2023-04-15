import Link from "next/link";
import Image from "next/image";
import { logo } from "../../../public/assets/images/index";
import Department from "./Department";
import ServicesNavMenu from "./ServicesNavMenu";
import NavSearchBox from "./NavSearchBox";
import MyItems from "./MyItems";
import UserInfo from "./UserInfo";
import TopNavCartIcon from "./TopNavCartIcon";

export default function Navbar() {
  return (
    <div className='sticky top-0 z-50 w-full bg-blue text-white border-b-[1px] border-b-white'>
      <div className='mx-auto h-20 px-4 flex items-center gap-2'>
        <Link href='/' className='navbarHover'>
          <Image src={logo} alt='logo' className='w-44' />
        </Link>
        <Department />
        <ServicesNavMenu />
        <NavSearchBox />
        <MyItems />
        <UserInfo />
        <TopNavCartIcon />
      </div>
    </div>
  );
}
