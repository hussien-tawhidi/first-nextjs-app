
export default function ServicesNavMenu() {
  return (
    <div className='navbarHover'>
      <div className='w-4 grid grid-cols-2 gap-[2px]'>
        <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
        <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
        <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
        <span className='w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex'></span>
      </div>
      <p
        className='text-base font-semibold
          '>
        Services
      </p>
    </div>
  );
}
