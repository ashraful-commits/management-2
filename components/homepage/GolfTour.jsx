import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GolfTour() {
  return (
    <section className="bg-black pb-[100px] overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-6 gap-4 items-center">
          <div className="col-span-6 lg:col-span-3">
            <div className="grid grid-cols-2 gap-4 pr-[0px] lg:pr-[60px]">
              <div className="col-span-1">
                <Image
                  width={300}
                  height={300}
                  className="w-full mb-4"
                  src="/g_img_1.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="w-full"
                  src="/g_img_2.png"
                  alt=""
                />
              </div>
              <div className="col-span-1">
                <Image
                  width={300}
                  height={300}
                  className="w-full mb-4 mt-[30px] sm:mt-[50px]"
                  src="/g_img_3.png"
                  alt=""
                />
                <Image
                  width={300}
                  height={300}
                  className="w-full"
                  src="/g_img_4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <h3 className="text-[14px] text-[#ED118F] md:text-[20px] lg:text-[24px] mt-10 lg:mt-0">
              WHAT IS THE INRANGE SMASH GOLF TOUR?
            </h3>
            <h2 className="font-extrabold text-[24px] md:text-[30px] xl:text-[45px] leading-[1.2] mt-2 mb-4 ">
              HOME OF GOLF&#39;S NON- TRADITIONAL CHAMPIONS
            </h2>
            <p className="mb-4 max-w-[500px] text-white font-serif">
              Inrange Smash Golf Tour (ISGT) if for the new golfer, double digit
              handicap or scratch golfer looking to test their skills, have fun,
              win prizes from golf&#39;s best brands or even become a ISGT World
              Champion.
            </p>
            <p className="mb-4 text-white !font-sans">
              The ISGT provides the Non-Traditional golfer of all skill levels
              the opportunity, setting and format to Play, Compete &amp; Win in
              a sport they love.
            </p>
            <div className="single_list_item flex items-center w-full mb-5 mt-6 gap-4">
              <div className="icon">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#ED118F" />
                  <path
                    d="M22.9999 10C17.4084 10 12.8594 14.549 12.8594 20.1405C12.8594 27.0797 21.9342 37.2668 22.3205 37.6971C22.6834 38.1013 23.317 38.1006 23.6793 37.6971C24.0657 37.2668 33.1405 27.0797 33.1405 20.1405C33.1403 14.549 28.5914 10 22.9999 10ZM22.9999 25.2424C20.1867 25.2424 17.898 22.9537 17.898 20.1405C17.898 17.3272 20.1867 15.0386 22.9999 15.0386C25.8131 15.0386 28.1018 17.3273 28.1018 20.1405C28.1018 22.9538 25.8131 25.2424 22.9999 25.2424Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text text-white">
                <h4 className="text-lg">PLAY.</h4>
                <p className="!font-sans">
                  World’s Best Courses at your Inrange Facility
                </p>
              </div>
            </div>
            <div className="single_list_item flex items-center w-full mb-5 gap-4">
              <div className="icon">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#ED118F" />
                  <path
                    d="M34.0039 18.7949H28.0898V35.6176H34.0039V18.7949Z"
                    fill="white"
                  />
                  <path
                    d="M25.957 10.3828H20.0429V35.6172H25.957V10.3828Z"
                    fill="white"
                  />
                  <path
                    d="M17.9141 27.2051H11.9999V35.6168H17.9141V27.2051Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text text-white">
                <h4 className="text-lg">COMPETE.</h4>
                <p className="!font-sans">
                  Tournaments, League & Contests at Your Skill Level.
                </p>
              </div>
            </div>
            <div className="single_list_item flex items-center w-full gap-4">
              <div className="icon">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="23" cy="23" r="23" fill="#ED118F" />
                  <path
                    d="M34.0039 18.7949H28.0898V35.6176H34.0039V18.7949Z"
                    fill="white"
                  />
                  <path
                    d="M25.957 10.3828H20.0429V35.6172H25.957V10.3828Z"
                    fill="white"
                  />
                  <path
                    d="M17.9141 27.2051H11.9999V35.6168H17.9141V27.2051Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="text text-white">
                <h4 className="text-lg">WIN.</h4>
                <p className="!font-sans">
                  Smash Cash & World Championship Points
                </p>
              </div>
            </div>
            <Link
              className="inline-block  rounded-md text-[15px]  text-white px-[25px] py-[12px] mt-10 hover:text-[#3F83F8] bg-[#3F83F8] hover:bg-[#fff] delay-300 transition-all font-russo_one"
              href="#"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
