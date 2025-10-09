import React from "react";
import { HorizontalInset } from "../../components/HorizontalInset";

export const SignIn = () => {
  return (
    <div
      className="bg-white w-full min-w-[1728px] min-h-[1117px] relative"
      data-model-id="42:232"
    >
      <div className="absolute top-[137px] left-[125px] w-[1478px] h-[858px] flex">
        <div className="w-[739px] h-[858px] bg-[#d4e0d0] rounded-[45px_0px_0px_45px]" />

        <img
          className="w-[739px] h-[858px] object-cover"
          alt="Gemini generated"
          src="https://c.animaapp.com/cWolSqf1/img/gemini-generated-image-f15mutf15mutf15m-1.png"
        />
      </div>

      <HorizontalInset
        className="!absolute !left-[349px] !top-[804px]"
        divider="https://c.animaapp.com/cWolSqf1/img/divider-1.svg"
      />
      <div className="absolute top-[459px] left-[235px] w-[539px] h-[58px] rounded-[45px] border border-solid border-black" />

      <div className="absolute top-[632px] left-[388px] w-[257px] h-[58px] bg-[#4c6444] rounded-[45px]" />

      <div className="absolute top-[646px] left-[479px] [font-family:'Magra',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        SIGN IN
      </div>

      <div className="absolute top-[226px] left-[323px] [font-family:'Magra',Helvetica] font-bold text-[#4c6444] text-8xl tracking-[0] leading-[normal]">
        Welcome!
      </div>

      <p className="absolute top-[343px] left-[294px] w-[458px] [font-family:'Magra',Helvetica] font-normal text-[#102820] text-5xl tracking-[0] leading-[normal]">
        Sign in to your Account
      </p>

      <div className="absolute top-[473px] left-[268px] [font-family:'Magra',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
        Email Address
      </div>

      <div className="absolute top-[548px] left-[235px] w-[541px] h-[58px]">
        <div className="absolute top-0 left-0 w-[539px] h-[58px] rounded-[45px] border border-solid border-black" />

        <div className="absolute top-3.5 left-10 [font-family:'Magra',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[normal]">
          Password
        </div>
      </div>

      <p className="absolute top-[716px] left-[396px] [font-family:'Magra',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal] whitespace-nowrap">
        Don’t have an account? Sign up today
      </p>
    </div>
  );
};
