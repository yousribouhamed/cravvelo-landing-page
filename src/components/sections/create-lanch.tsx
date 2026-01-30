"use client";

import MaxWidthWrapper from "@/components/max-with-wrapper";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { FC } from "react";

const CreateLanch: FC = ({}) => {
  const locale = useLocale();
  const isRtl = locale === "ar";
  const t = useTranslations("landing.createLaunch");
  
  return (
    <MaxWidthWrapper className="my-6   ">
      <section
        id="WHIY_US"
        dir={isRtl ? "rtl" : "ltr"}
        className="mx-auto w-full my-14  lg:max-w-screen-2xl min-h-[300px] h-fit   grid grid-cols-1 lg:grid-cols-2 px-2 md:px-8 lg:px-0  "
      >
        <div
          className={`w-full h-full flex flex-col ${
            isRtl ? "items-end lg:order-2" : "items-start lg:order-1"
          }`}
        >
          <div
            className={`w-full mt-8 h-[60px] relative flex items-center ${
              isRtl ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`bg-black w-[60px] h-[60px] rounded-[50%] flex items-center justify-center absolute top-0 z-10 ${
                isRtl ? "-left-5 md:left-0" : "-right-5 md:right-0"
              }`}
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 59 59"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4808 0.539062L33.7112 19.2674L49.9455 9.01585L39.694 25.2502L58.4223 29.4806L39.694 33.7111L49.9455 49.9454L33.7112 39.6938L29.4808 58.4222L25.2503 39.6938L9.01597 49.9454L19.2675 33.7111L0.539185 29.4806L19.2675 25.2502L9.01597 9.01585L25.2503 19.2674L29.4808 0.539062Z"
                  fill="white"
                />
              </svg>
            </div>
            <div
              className={` w-[200px]  md:w-[250px]  lg:w-[270px] h-[70px]  rounded-2xl  bg-primary flex items-center justify-center absolute  -bottom-8 p-2 ${
                isRtl ? "-rotate-6 left-3 md:left-5" : "rotate-6 right-3 md:right-5"
              }`}
            >
              <p className=" text-xl md:text-3xl font-extrabold text-white">
                {t("title1")}
              </p>
            </div>
            <div
              className={` w-[150px] md:w-[250px] lg:w-[270px] h-[70px]  rounded-2xl  bg-[#FFC901] flex items-center justify-center p-2 absolute top-0 z-10 ${
                isRtl
                  ? "left-[12rem] lg:left-[17.5rem] rotate-12"
                  : "right-[12rem] lg:right-[17.5rem] -rotate-12"
              }`}
            >
              <p className=" text-xl md:text-3xl font-extrabold text-black">
                {t("title2")} {t("title3")}
              </p>
            </div>
          </div>

          <p className="text-xl text-black text-start mt-[100px]">
            {t("description")}
          </p>
        </div>
        <div
          className={` border h-[400px] shadow-2xl relative rounded-2xl mt-16 p-4 col-span-1 ${
            isRtl ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={"/money-man.jpg"}
            alt="money"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default CreateLanch;
