import React from "react";
import accordionData from "./data";

const Accordian = () => {
  const [select, setSelect] = React.useState(null);
  const handleSelect = (getid) => {
    setSelect(getid === select ? null : getid);
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="text-center mt-6 font-semibold text-4xl ">Accordian</h1>
      <div className="mt-6 w-[700px]">
        {accordionData.map((item) => (
          <div
            key={item.id}
            className=" border flex flex-col mt-6 px-8 py-6 rounded-md w-full"
            onClick={() => handleSelect(item.id)}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-xl">{item.question}</h2>
              <span className="ml-7 cursor-pointer font-bold text-2xl">+</span>
            </div>
            {select === item.id ? <p className="text-gray-600 mt-2">{item.answer}</p> : ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordian;
