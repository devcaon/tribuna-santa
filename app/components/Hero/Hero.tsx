import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BurgerImg1 from "@/public/images/b1.png";
import BurgerImg2 from "@/public/images/b2.png";
// import BurgerImg3 from "@/public/images/b3.png";
import Image from "next/image";
import { BiCycling } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Hero = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={false}
      showDots={true}
      responsive={responsive}
      infinite
      autoPlay={true}
      autoPlaySpeed={7000}
      transitionDuration={500}
      itemClass="item"
      centerMode={false}
      className="h-[40vh] md:h-[65vh]"
    >
      {/* 1st hero slide */}
      <div className="w-full md:h-[65vh] h-[40vh] flex items-center justify-center bg-[#c4c446]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-[22px] text-white font-semibold">
            Espaço para anunciantes parceiros
          </span>
          <Image src="/images/logo.png" alt="banner" width={288} height={96} />
          <span className="text-[22px] text-white font-semibold">
            O Canal de notícias da Igreja Católica
          </span>
        </div>
      </div>
      {/* 1st hero slide */}
      <div className="w-full md:h-[65vh] h-[40vh] flex items-center justify-center bg-[#2ca536]">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-[22px] text-white font-semibold">
            Espaço para anunciantes parceiros
          </span>
          <Image src="/images/logo.png" alt="banner" width={288} height={96} />
          <span className="text-[22px] text-white font-semibold">
            O Canal de notícias da Igreja Católica
          </span>
        </div>
      </div>
    </Carousel>
  );
};

export default Hero;
