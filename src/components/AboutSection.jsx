import { Slide, Zoom } from "react-awesome-reveal";
import AboutImage from "../assets/about-img.webp";
export const AboutSection = () => {
  return (
    <div className="bg-[#212121] ">
      <div
        className="text-white    grid  mx-auto max-w-7xl py-16 lg:py-32"
        id="about"
      >
        <Zoom direction="left" triggerOnce>
          <h2 className=" underline text-4xl font-[500] cursor-pointer  text-center animate-bounce  ">
            About
          </h2>
        </Zoom>
        <div className="text-center  gap-6 flex flex-col items-center lg:grid lg:grid-cols-2  max-w-7xl pt-16 lg:pt-32 px-8 ">
          <img
            src={AboutImage}
            className="max-w-[486px] w-full mx-auto hover:scale-110 transition-all duration-200 overflow-hidden"
          />
          <div className=" flex  flex-col gap-4 lg:gap-8  px-8 lg:p-8">
            <Slide direction="up">
              <h1 className="font-bold text-4xl">
                Welcome to the world of Picky Parrots
              </h1>
            </Slide>
            <Slide direction="up">
              <p className="font-[500] font-Montserrat">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                imperdiet est vel leo suscipit blandit. Nunc efficitur libero
                est, sed iaculis arcu consectetur id. Aliquam at semper dolor.
                Nunc rutrum a magna vel convallis. Aenean non lorem volutpat,
                facilisis ipsum a, accumsan felis. Nunc hendrerit pretium
                lacinia. Praesent erat velit, dapibus non orci ac, semper
                dapibus lorem. Nullam imperdiet eros eu purus bibendum
                ullamcorper. Sed vehicula, nisi sed fermentum mollis, diam nunc
                gravida odio, vel convallis orci lorem eget massa. Duis varius
                scelerisque nisi, ac rhoncus diam. Nam viverra nibh a vulputate
                lu
              </p>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
};
