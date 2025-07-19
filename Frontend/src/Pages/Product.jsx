import React from "react";
import { useState } from "react";

const carImages = [
  {
    name: "Bugatti Chiron",
    prise: "$200 Million",
    fuel: "petrol",
    fuelcolour: "text-red-500",
    src: "https://www.jamesedition.com/stories/wp-content/uploads/2020/12/9_jesko3.jpg",
  },
  {
    name: "Koenigsegg Jesko",
    prise: "$3 Million",
    fuel: "petrol",
    fuelcolour: "text-red-500",
    src: "https://cdn.sanity.io/images/vxy259ii/production/b237982b3ec447230a5ddde84245aab0baf80148-1620x1080.jpg?auto=format&crop=entropy&fit=crop&h=900&q=75&w=1296",
  },
  {
    name: "Lotus Evija",
    prise: "$2.3 Million",
    fuel: "Electric",
    fuelcolour: "text-green-500",
    src: "https://robbreport.com/wp-content/uploads/2024/07/opener-w-Lotus_Evija_X_11.jpg?w=1024",
  },
  {
    name: "McLaren Speedtail",
    prise: "$2.25 Million",
    fuel: "Jet Fuel",
    fuelcolour: "text-blue-500",
     src: "https://i.ytimg.com/vi/jLfjk0bW6dw/maxresdefault.jpg"
  },
  {
    name: "Pagani Zonda",
    prise: "$1.5 Million",
    fuel: "Electric",
    fuelcolour: "text-green-500",
    src: "https://motoringworld.in/wp-content/uploads/2023/09/https___www.carscoops.com_wp-content_uploads_2023_09_Polestar-Synergy-Design-Contest-Winner-21-1024x768-1-1.jpg",
  },
  {
    name: "Porsche 918 Spyder",
    prise: "$1 Million",
    fuel: "Electric",
    fuelcolour: "text-green-500",
    src: "https://car-images.bauersecure.com/wp-images/185111/093-skoda-vision-gt.jpg",
  },
];

const Product = () => {

  return (
    <div>
      <p className="text-5xl font-bold mt-6 ml-9">Buy Our Luxury Hyper Cars</p>
      <div className="flex flex-wrap justify-around  mt-3">
        
        {carImages.map((ob, index) => ((
          <div key={index} className="rounded-2xl m-2 w-150 md:w-90 lg:w-80 h-95 xl:w-75 2xl:w-100  overflow-hidden mt-10 shadow-2xl">
            <img className="h-60 w-full object-cover mb-5" src={ob.src} alt={`Car ${index + 1}`}/>
            <div className="flex items-center mt-4 mb-4 ml-6">
            <p className="font-bold text-2xl">{ob.name}</p>
            <p className="font-bold text-2xl ml-3 mr-3">.</p>
            <p className={`font-medium text-xl opc ${ob.fuelcolour}`}>{ob.fuel}</p>
            </div>
            <p className="font-bold text-4xl ml-6 mt-5">{ob.prise}</p>
          </div>
        )))}
      </div>
    </div>
  );
};

export default Product;
