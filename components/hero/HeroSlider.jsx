import { sliderImgFour, sliderImgOne, sliderImgThree, sliderImgTwo } from "@/public/assets/images";
import Image from "next/image";
import HeroSliderText from "./HeroSliderText";
import Slider from "react-slick";


export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 4000,
    // cssEase: "linear",
    nextArrow: "",
    prevArrow: "",
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className='w-full h-[410px] relative'>
          <Image
            src={sliderImgOne}
            alt='slider'
            className='w-full h-full object-cover rounded-lg'
            priority
          />
          <HeroSliderText
            customeClass='absolute w-60 h-full top-2 left-4 flex flex-col gap-3 text-white'
            title='Spring fashion in bloom'
            text=' New trends & styles to turn heads anytimes, on any budgets.'
          />
        </div>
        <div className='w-full h-[410px] relative'>
          <Image
            src={sliderImgTwo}
            alt='slider'
            className='w-full h-full object-cover rounded-lg'
            priority
          />
          <HeroSliderText
            customeClass='absolute w-60 h-full top-2 left-4 flex flex-col gap-3 text-black'
            title='Up to 65% off'
            text=' New saving every week! Hurry to score to low, low price'
          />
        </div>
        <div className='w-full h-[410px] relative'>
          <Image
            src={sliderImgThree}
            alt='slider'
            className='w-full h-full object-cover rounded-lg'
            priority
          />
          <HeroSliderText
            customeClass='absolute w-60 h-full top-2 left-4 flex flex-col gap-3 text-black'
            title='You can save $1,300 + a year'
            text=' Start saving with free delivery, Walmart Record & more'
          />
        </div>
        <div className='w-full h-[410px] relative'>
          <Image
            src={sliderImgFour}
            alt='slider'
            className='w-full h-full object-cover rounded-lg'
            priority
          />
          <HeroSliderText
            customeClass='absolute w-60 h-full top-2 left-4 flex flex-col gap-3 text-black'
            title='Up to 65% off'
            text=' New saving every week! Hurry to score to low, low price'
          />
        </div>
      </Slider>
    </div>
  );
}
