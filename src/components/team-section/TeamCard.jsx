import { Slide } from "react-awesome-reveal";
import Image from "../../assets/about-img.webp";

export const TeamCard = () => {
  const carddetails = [
    {
      image: Image,
      heading: "Bilal",
      subheading: "Fronted Developer",
    },
    {
      image: Image,
      heading: "Bilal",
      subheading: "Fronted Developer",
    },
    {
      image: Image,
      heading: "Bilal",
      subheading: "Fronted Developer",
    },
    {
      image: Image,
      heading: "Bilal",
      subheading: "Fronted Developer",
    },
  ];
  return (
    <div>
      <ul className="grid items-center justify-center sm:grid-cols-2">
        {carddetails.map((items, index) => (
          <li key={index}>
            <Slide direction="up" triggerOnce>
              <div className="p-4  w-full sm: flex justify-center items-center  ">
                <div className="p-8 bg-[#E2DBEB] rounded-2xl text-center">
                  <div className="flex flex-col  ">
                    <img
                      src={items.image}
                      className="max-w-[278px] w-full mx-auto hover:scale-110 transition-all duration-300"
                    />
                    <h1 className="font-bold mt-8 text-5xl">{items.heading}</h1>
                    <p className="font-[600] text-base md:text-lg lg:text-xl text-center mt-4">
                      {items.subheading}
                    </p>
                  </div>
                </div>
              </div>
            </Slide>
          </li>
        ))}
      </ul>
    </div>
  );
};
