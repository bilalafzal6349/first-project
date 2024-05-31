import { FooterLeft } from "./FooterLeft";
import { FooterRight } from "./FooterRight";

export const Footer = () => {
  return (
    <div className="bg-[#212121]">
      <div
        className="grid grid-cols-1 md:grid-cols-2 mg:gap-4 md:mx-auto  text-white  justify-center text-center  items-center pb-16
      lg:pb-32 mx-auto max-w-7xl px-8 "
      >
        <FooterRight />
        <FooterLeft />
      </div>
    </div>
  );
};
