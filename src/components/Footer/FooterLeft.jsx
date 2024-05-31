import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
export const FooterLeft = () => {
  return (
    <div className="grid  items-center justify-center font-Montserrat ">
      <div className="flex  gap-16 pb-8  text-start  ">
        <div className=" flex flex-col space-y-8">
          <h1 className="cursor-pointer font-bold">Menu</h1>
          <h1 className="cursor-pointer">About</h1>
          <h1 className="cursor-pointer">Roadmap</h1>
          <h1 className="cursor-pointer">FAQ’s</h1>
          <h1 className="cursor-pointer">Team</h1>
        </div>
        <div className="flex flex-col space-y-8 ">
          <div className="cursor-pointer font-bold">LINKS</div>
          <div className="cursor-pointer">Smart Contract</div>
          <div className="cursor-pointer">OpenSea</div>
          <div className="cursor-pointer">Terms</div>
          <div className="cursor-pointer">Sign in</div>
        </div>
      </div>
      <div className="flex  fill-white text-white  color-white  items-center justify-center  mr-4s gap-6 mt-8">
        <div>
          <FaDiscord className="w-[30px] h-[30px] cursor-pointer" />
        </div>
        <div>
          <FaTwitter className="w-[30px] h-[30px] cursor-pointer" />
        </div>
        <div>
          <FaInstagram className="w-[30px] h-[30px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
