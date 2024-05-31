import { useState } from "react";
import line from "../assets/line.svg";
export const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h2
        onClick={toggleAnswer}
        className="cursor-pointer text-white  text-xl p-4 "
      >
        {question}
      </h2>
      {isOpen && <p className="p-4 pt-0">{answer}</p>}
      <img src={line} className="my-4" />
    </div>
  );
};
