import { IoRemoveCircleSharp } from "react-icons/io5";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";

export const CounterSection = () => {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    if (counter < 5) {
      setCounter((counter) => counter + 1);
    }
  };
  const decrease = () => {
    if (counter > 1) {
      setCounter((counter) => counter - 1);
    }
  };
  return (
    <div>
      <div className=" py-12 pt-0 lg:pt-12 gap-8 justify-center items-center space-y-4 flex flex-col sm:flex ">
        <div className="flex gap-8">
          <IoRemoveCircleSharp
            onClick={decrease}
            className="bg-transparent text-yellow-400 text-5xl"
          >
            -
          </IoRemoveCircleSharp>
          <div className="font-bold text-4xl">{counter}</div>
          <IoAddCircle
            onClick={increase}
            className="flex items-center text-yellow-400 text-5xl"
          >
            +
          </IoAddCircle>
        </div>
        <div>
          <button className="bg-yellow-300 py-3 px-16 rounded-xl cursor-pointer text-xl font-Montserrat ">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
};
