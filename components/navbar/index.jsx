import BottomNavbar from "./BottomNavbar";
import TopNavbar from "./topnavbar-com";

export default function Navbar() {
  return (
    <div className='sticky top-0 z-50'>
      <TopNavbar />
      <BottomNavbar />
    </div>
  );
}
