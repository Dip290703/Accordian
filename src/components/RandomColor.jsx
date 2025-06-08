import React from "react";

const RandomColor = () => {
  const [type, setType] = React.useState("");
  const [color, setColor] = React.useState("#000000");
  
//   const randomColorUtility (length){
//     return Math.floor(Math.random()*length)
//   }

  const handleColorHex = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for(let i=0;i<6 ;i++){
        hexColor = hexColor+hex[Math.floor(Math.random()*16)]
    }
    console.log(hexColor);
    
    setColor(hexColor)
  };
  const handleColorRgb = () => {
    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)
    const rgbColor = `rgb(${r},${g},${b})`
   setColor(rgbColor)

  };
  return (
    <div className="mt-10 p-8  h-[800px] ">
      <div className="w-full h-full flex justify-center items-center flex-col rounded-2xl"
      style={{backgroundColor:color}} >
       <div> <button
          onClick={() => setType("hex")}
          className="ml-4 border px-4 py-2 rounded-lg font-semibold text-white"
        >
          Hex Color
        </button>
        <button
          onClick={() => setType("rgb")}
          className="ml-4 border px-4 py-2 rounded-lg font-semibold text-white"
        >
          RGB Color
        </button>
        <button
          onClick={type === "hex" ? handleColorHex : handleColorRgb}
          className="ml-4 border px-4 py-2 rounded-lg font-semibold text-white"
        >
          Generate Random Color
        </button></div>
       <p className="mt-10  text-white text-6xl font-semibold ">
        {
            type === "hex" ? `  ${color}`:
             ` ${color}`
        }
       </p>
      </div>
    </div>
  );
};

export default RandomColor;
