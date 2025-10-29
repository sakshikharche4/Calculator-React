import React, { useState } from "react";

const Section1 = () => {
  const [number, setNumber] = useState(" ");
    const [result, setResult] = useState(""); 


const handler = (num) => {

   if (num === "=") {
      
        setResult(eval(number)); 
      
      return;
    }
    
    if (num === "C") {
      setNumber("");
      setResult("")
      return;
    }

    
    setNumber((prev) => prev + num);
  };
  return (
    <>
     
      <div className="w-full mb-4 space-y-2">
        <input
          type="text"
          value={number}
          placeholder="Enter Value"
          className="bg-[#2b2b2b] text-white w-full py-4 px-4 rounded-lg outline-none text-right text-2xl"
        />

        <input
          type="text"
          placeholder="Result"
          value={result}
          className="bg-[#1a1a1a] text-emerald-400 w-full py-4 px-4 rounded-lg outline-none text-right text-3xl"
        />
      </div>
      <div className="grid grid-cols-4 gap-3 w-full">
        <button
          onClick={() => {
            handler("C");
          }}
          className="bg-rose-600 hover:bg-rose-700 text-white py-4 rounded"
        >
          C
        </button>
        <button
          onClick={() => {
            handler("(");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          (
        </button>
        <button
          onClick={() => {
            handler(")");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          )
        </button>
        <button
          onClick={() => {
            handler("/");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          /
        </button>

        <button
          onClick={() => {
            handler("9");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          9
        </button>
        <button
          onClick={() => {
            handler("7");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          7
        </button>
        <button
          onClick={() => {
            handler("8");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          8
        </button>
        <button
          onClick={() => {
            handler("+");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          +
        </button>

        <button
          onClick={() => {
            handler("6");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          6
        </button>
        <button
          onClick={() => {
            handler("4");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          4
        </button>
        <button
          onClick={() => {
            handler("5");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          5
        </button>
        <button
          onClick={() => {
            handler("-");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          -
        </button>

        <button
          onClick={() => {
            handler("3");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          3
        </button>
        <button
          onClick={() => {
            handler("1");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          1
        </button>
        <button
          onClick={() => {
            handler("2");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          2
        </button>
        <button
          onClick={() => {
            handler("*");
          }}
          className="bg-[#3d3d3d] hover:bg-[#4b4b4b] text-amber-400 py-4 rounded"
        >
          *
        </button>

        <button
          onClick={() => {
            handler("0");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded col-span-2"
        >
          0
        </button>
        <button
          onClick={() => {
            handler(".");
          }}
          className="bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white py-4 rounded"
        >
          .
        </button>
        <button
          onClick={() => {
            handler("=");
          }}
          className="bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded"
        >
          =
        </button>
      </div>
    </>
  );
};

export default Section1;
