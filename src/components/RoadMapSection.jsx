import { Slide, Zoom } from "react-awesome-reveal";

export const RoadMapSection = () => {
  const roadmap = [
    {
      title: "12’21",
      secondTitle: "Mint Start",
      paragraph:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel leo suscipit blandit. Nunc efficitur libero est, sed iaculis arcu consectetur id. Aliquam at semper dolor.",
    },
    {
      title: "12’21",
      secondTitle: "100k Giveaway",
      paragraph:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel leo suscipit blandit. Nunc efficitur libero est, sed iaculis arcu consectetur id. Aliquam at semper dolor.",
    },
    {
      title: "12’21",
      secondTitle: "Surprise Airdrop",
      paragraph:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel leo suscipit blandit. Nunc efficitur libero est, sed iaculis arcu consectetur id. Aliquam at semper dolor.",
    },
    {
      title: "12’21",
      secondTitle: "Merch Launch",
      paragraph:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel leo suscipit blandit. Nunc efficitur libero est, sed iaculis arcu consectetur id. Aliquam at semper dolor.",
    },
    {
      title: "12’21",
      secondTitle: "Picky Parrot Game",
      paragraph:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc imperdiet est vel leo suscipit blandit. Nunc efficitur libero est, sed iaculis arcu consectetur id. Aliquam at semper dolor.",
    },
  ];
  return (
    <div className=" py-16 lg:py-32 bg-[#212121] " id="roadmap">
      <Zoom direction="right" triggerOnce>
        <p className="underline  text-white text-4xl text-center flex flex-col pb-16 ">
          RoadMap
        </p>
      </Zoom>
      <div className="flex flex-1 flex-col gap-4 lg:gap-16 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
        {roadmap.map((item, index) => (
          <div key={index}>
            <Slide direction="up" triggerOnce>
              <div className="bg-yellow-300 flex flex-col items-center sm:flex-row  sm:justify-between text-4xl p-6 md:p-8 lg:p-16  rounded-xl  ">
                <p className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl ">
                  {item.title}
                </p>
                <p className="text-white font-bold text-xl sm:text-3xl md:text-5xl lg:text-7xl ">
                  {item.secondTitle}
                </p>
              </div>

              <p className="text-blue-300 font-semibold text-[1rem] lg:text-xl  leading-[1.5rem] mt-8 lg:mt-16 max-w-[56rem] text-center py-4 mx-auto font-Montserrat">
                {item.paragraph}
              </p>
            </Slide>
          </div>
        ))}
      </div>
    </div>
  );
};
