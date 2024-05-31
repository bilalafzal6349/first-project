import { HeroLeftSection } from "./HeroLeftSection";
import { CounterSection } from "./counterSection";
import { Zoom, Slide } from "react-awesome-reveal";

export const HeroSection = () => {
  return (
    <div className=" bg-[linear-gradient(90deg,#55c4ff,#55c4ff_80%,#212121_0,#212121)] relative">
      <div className="bg-[#55C4FF]  max-w-7xl mx-auto  px-4 pb-8 lg:pb-0 lg:px-0 block lg:grid lg:grid-cols-[60%,40%]">
        <div className="grid  gap-6 px-6  ">
          <div className="pt-40 ">
            <Zoom direction="left" triggerOnce>
              <h1
                className={` text-5xl md:text-6xl lg:text-[82px] text-yellow-500  `}
              >
                Discover , collect and sell Nft’s
              </h1>
            </Zoom>
            <Slide direction="up" triggerOnce>
              <p className="text-black  text-base md:text-lg max-w-xl lg:text-xl font-Montserrat font-semibold  py-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur eros tortor, condimentum ut aliquet euismod, venenatis
                at sem.
              </p>
            </Slide>
          </div>
          <CounterSection />
        </div>
        <HeroLeftSection />
      </div>
    </div>
  );
};
