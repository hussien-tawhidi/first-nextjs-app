export default function HeroSliderText({ title, text, customeClass }) {
  return (
    <div className={customeClass}>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <p className='text-sm leading-5'>{text}</p>
      <button className='bg-white text-sm text-black font-semibold rounded-full w-24 h-8 border-[1px] border-black'>
        Shop now
      </button>
    </div>
  );
}
