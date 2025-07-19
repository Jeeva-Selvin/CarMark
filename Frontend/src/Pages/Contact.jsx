import React from "react";

const Contact = () => {
  const copynum1 = () => {
    navigator.clipboard.writeText("+91 9876543210");
    alert("Number copied to clipboard!");
  };
  const copynum2 = () => {
    navigator.clipboard.writeText("+91 1234567890");
    alert("Number copied to clipboard!");
  };
  const copyemail1 = () => {
    navigator.clipboard.writeText("HyperCars@carmark.com");
    alert("Email copied to clipboard!");
  };
  const copyemail2 = () => {
    navigator.clipboard.writeText("Enquire@carmark.com");
    alert("Email copied to clipboard!");
  };

  return (
    <>
    <div className="bg-gray-100 h-[95wh]">
      <div className="relative w-full 2xl:h-130 md:h-100 h-80 ">
        <img
          className="absolute w-full 2xl:h-130 md:h-100 h-80 object-cover shadow-md"
          src="https://cdn.prod.website-files.com/634f8a681508d6180f9a2128/636b70a0cb95e227b006d1c0_call-center-agents-working.jpeg"
          alt="call center employs"
        />
        <p className="relative 2xl:pt-50 2xl:pl-20 md:pt-15 md:pl-15 pt-10 pl-10 font-bold 2xl:text-6xl md:text-5xl text-4xl">Contact Us</p>
      </div>
      <div className="flex md:flex-row flex-col mt-4">
        <div className="rounded-2xl shadow-md p-5 m-4 md:w-full bg-white">
          <p className="text-2xl font-bold text-blue-600 mb-3">Call Us</p>
          <p className="mt-2">For Sales:-</p>
          <div className="flex">
            <p className="text-xl mr-3">+91 9876543210</p>
            <button
              onClick={copynum1}
              className="border black rounded-xl pl-2 pr-2 p-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              copy
            </button>
          </div>
          <p className="mt-2">For Support:-</p>
          <div className="flex">
            <p className="text-xl mr-3">+91 1234567890</p>
            <button
              onClick={copynum2}
              className="border black rounded-xl pl-2 pr-2 p-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              copy
            </button>
          </div>
        </div>
        <div className="rounded-2xl shadow-md p-5 m-4 md:w-full bg-white">
          <p className="text-2xl font-bold text-blue-600 mb-3">Email Us</p>
          <p className="mt-2">To Buy a Car:-</p>
          <div className="flex">
            <p className="text-xl  mr-3">HyperCars@carmark.com</p>
            <button
              onClick={copyemail1}
              className="border black rounded-xl pl-2 pr-2 p-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              copy
            </button>
          </div>
          <p className="mt-2">To Enquire About Cars:-</p>
          <div className="flex">
            <p className="text-xl mr-3">Enquire@carmark.com</p>
            <button
              onClick={copyemail2}
              className="border black rounded-xl pl-2 pr-2 p-1 bg-blue-600 text-white hover:bg-blue-700"
            >
              copy
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
