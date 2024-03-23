import React from "react";
import Image from "next/image";
import inrangeLogo from "../../public/inrangeLogo.svg";
import golfer from "../../public/golfer-img.png";

export default function Hero() {
  return (
    <section className="hero_area md:pb-[50px] pb-0 pt-[200px] md:pt-[400px] bg-[url('/hero_bg.jpg')] bg-cover bg-center relative">
      <div className="container mx-auto px-5 relative">
        <Image
          src={golfer}
          className="hidden md:block xl:w-[80%] w-[100%] absolute md:bottom-[80px] bottom-0 left-1/2 transform -translate-x-1/2 z-1"
          alt="golfer image"
        />
        <div className="grid grid-cols-6 gap-4 items-center">
          <div className="col-span-6 md:pb-0 pb-[200px]">
            <Image
              className="mx-auto md:mt-20 relative z-50"
              src={inrangeLogo}
              alt="inrange Logo"
            />
            <h1 className="text-white text-[28px] sm:text-[35px] md:text-[50px] xl:text-[70px] uppercase text-center mb-4 md:mb-0 leading-[1.2] font-russo_one relative z-50">
              SMASH GOLF TOUR
            </h1>

            <div className="hero_pley_btn text-center relative z-50">
              <div
                className="inline-block uppercase mt-1 text-center bg-[#3F83F8]  py-[7px] md:py-[12px] px-[20px] md:px-[70px] text-[20px] sm:text-[24px] md:text-[40px] lg:text-[45px] rounded-tl-[20px] rounded-br-[20px] md:rounded-tl-[50px] md:rounded-br-[50px]  tracking-[0em] md:tracking-[0.1em] delay-300 font-russo_one"
                href="#"
              >
                play. compete. win
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
