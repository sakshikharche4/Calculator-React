import React from "react";
import Section1 from "./compoents/Section1";
import Input from "./compoents/Input";

const App = () => {
  return (
     <div className="h-screen w-screen flex justify-center items-center bg-[url('https://img.freepik.com/free-photo/back-school-decoration-with-pencils-calculator-space_23-2147662344.jpg?semt=ais_hybrid&w=740')] bg-cover bg-center">
      <div className="bg-black/40 p-8 rounded-2xl backdrop-blur-sm flex flex-col items-center">
     
      
      <Section1 />
    </div>
    </div>
  );
};

export default App;
