import { Zoom } from "react-awesome-reveal";
import { FAQ } from "./Faqs";
export const FaqSection = () => {
  return (
    <div className=" bg-[#212121]" id="faq">
      <div className="mx-auto p-8 py-16 lg:py-32 max-w-6xl">
        <Zoom direction="left" triggerOnce>
          <h1 className="text-white text-5xl   text-center p-4 mb-8 underline animate-bounce">
            FAQ’s
          </h1>
        </Zoom>

        <div className="text-center mb-16px text-white   w-full  bg-[#212121] rounded-3xl shadow-md mb-20">
          <div>
            <div className="text-center flex flex-col gap-4  p-8 md:p-10 mt-16 lg:mt-32 mx-4  mb-4">
              <FAQ
                question="What is an Nft?"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />
              <FAQ
                question="How can i buy a picky parrot nft??"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />

              <FAQ
                question="What is the launch date?"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />
              <FAQ
                question="How much will it cost to mint a picky parrot nft?"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />
              <FAQ
                question="What is minimum SPA?"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />
              <FAQ
                question="How can i invite people to the discord server?"
                answer=" Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
    occaecat ut occaecat consequat est minim minim esse tempor laborum
    consequat esse adipisicing eu reprehenderit enim."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
