import { Zoom } from "react-awesome-reveal";
import { TeamCard } from "./TeamCard";
export const TeamSection = () => {
  return (
    <div id="team" className=" py-16 lg:py-32 px-4 bg-[#212121] ">
      <div className=" w-full px-8  bg-[#55C4FF] rounded-2xl max-w-7xl mx-auto py-16 lg:py-32">
        <Zoom direction="right" triggerOnce>
          <h2 className="text-white left-react-reveal underline text-5xl text-center pb-16 lg:pb-32  animate-bounce">
            Team
          </h2>
        </Zoom>
        <div className="relative">
          <TeamCard />
        </div>
      </div>
    </div>
  );
};
