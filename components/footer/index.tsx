import React from "react";

export default function Footer() {
  return (
    <div className='w-full bg-lightBlue'>
      {/* top footer  */}
      <div className='py-10 flex flex-col gap-4 justify-center items-center'>
        <p className='font-medium'>We will love to hear what you think!</p>
        <button className='w-36 h-9 border-[1px] border-black bg-white rounded-full hover:border-[2px] transition-all duration-200'>
          Give Feed Back
        </button>
      </div>
      {/* bottom footer  */}
      <div className='w-full bg-hoverBg text-white pt-4 pb-6'>
        <div className='px-3 mx-auto'>
          <ul className='w-full flex flex-wrap gap-1 justify-center text-sm text-zinc-200'>
            <li className='footerMenu'>All Derprtment</li>
            <li className='footerMenu'>Store Directory</li>
            <li className='footerMenu'>Careers</li>
            <li className='footerMenu'>Our Company</li>
            <li className='footerMenu'>Sellon.com</li>
            <li className='footerMenu'>Help</li>
            <li className='footerMenu'>COVI-19 Vaccine</li>
            <li className='footerMenu'>Schedule</li>
            <li className='footerMenu'>Products Recalls</li>
            <li className='footerMenu'>Accessibility</li>
            <li className='footerMenu'>Get the app</li>
            <li className='footerMenu'>Login</li>
            <li className='footerMenu'>Sign Up</li>
            <li className='footerMenu'>Term of use</li>
            <li className='footerMenu'>Privacy & Security</li>
          </ul>
          <p className='text-sm text-zinc-400 text-center mt-4'>
            © 2023 All Right Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
