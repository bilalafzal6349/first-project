export const Navbar = () => {
  const links = [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Roadmap",
      href: "#roadmap",
    },
    {
      title: "FAQ's",
      href: "#faq",
    },
    {
      title: "Team",
      href: "#team",
    },
  ];
  return (
    <div className=" backdrop-blur-md w-full bg-white/40  space-x-4 fixed top-0  z-40 ">
      <div className="flex  justify-between items-center max-w-7xl sm:mx-auto px-8 mx-4">
        <div className="py-6 lg:py-8 flex items-center font-Ribeye font-logo text-lg md:text-2xl">
          PICKY PARROTS
        </div>
        <div className=" font-Righteous f hidden py-6 lg:py-8 lg:flex space-x-12 items-center  ">
          {links.map((items, index) => (
            <div key={index}>
              <a
                href={items.href}
                className={`${
                  index === 1 ? "bg-blue" : ""
                } cursor-pointer  text-sm font-bold transition-all duration-200 capitalize active:text-yellow-300 hover:text-yellow-300`}
              >
                {items.title}
              </a>
            </div>
          ))}
        </div>
        <div>
          <button className="flex bg-yellow-300 p-4  font-Montserrat text-xs md:text-xs lg:text-sm hover:animate-pulse bg-yellow py-6 lg:py-8 px-4 font-bold rounded-b-2xl">
            Connect
            <br />
            Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
