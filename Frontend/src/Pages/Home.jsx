import React from "react";

const Home = () => {
  const images = [
    "https://carorbis.com/wp-content/uploads/2023/04/Top-7-Most-Exciting-Hypercars-of-2022.png",
    "https://www.slashgear.com/img/gallery/10-of-the-most-expensive-hypercars-ever-made-ranked/intro-1709668510.webp",
    "https://media.techeblog.com/images/the-naran-hyper-coupe-hypercar.jpg",
    "https://www.carscoops.com/wp-content/uploads/2022/10/Koenigsegg-KXX-24-1-1024x555.jpg",
    "https://www.topgear.com/sites/default/files/2021/10/1%20Bugatti%20Bolide.jpg?w=1784&h=1004",
  ];
  return (
    <>
        <h1 className="text-center text-4xl md:text-7xl 2xl:text-6xl m-10 p font-bold">
          Welcome to CarMark
        </h1>
      <div className="overflow-hidden">
        <div className="flex md:min-w-[400%] min-w-[900%] mb-5 justify-center">
          <div className="flex w-full justify-center infloop">
            {images.map((src, index) => (
              <img
                key={index}
                className="bg-white w-full rounded-xl shadow-lg overflow-hidden m-2"
                src={src}
                alt={`Hypercar ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex w-full justify-center infloop">
            {images.map((src, index) => (
              <img
                key={index}
                className="bg-white w-full rounded-xl shadow-lg overflow-hidden m-2"
                src={src}
                alt={`Hypercar ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="font-bold md:text-6xl md:ml-10 md:mt-10 text-4xl mb-5 ml-4">
          India's no.1
        </p>
        
        <div className="overflow-hidden 2xl:flex bg-gray-100">
          <img className="2xl:w-7xl 2xl:rounded-xl 2xl:m-4 shadow-lg rounded-2xl" src="https://www.topgear.com/sites/default/files/2022/12/1%20Bugatti%20Chiron%20DRIFT.jpg" alt="drifting car" />
          <div className="m-5">
          <p className="2 xl:text-5xl text-3xl font-bold">Best possible Drifts</p>
          <p className="mt-2 text-2xl">Our Cars has the best Drift</p>
          </div>
        </div>
        <div className="overflow-hidden 2xl:flex bg-gray-200">
          <img className="2xl:w-5xl w-[100vw] 2xl:rounded-xl rounded-2xl 2xl:m-4 2xl:shadow-lg" src="https://www.automoblog.com/wp-content/uploads/2020/09/AdobeStock_88569445.jpeg" alt="drifting car" />
          <div className="m-5">
          <p className="2xl:text-5xl text-3xl font-bold">Best possible Tires</p>
          <p className="mt-2 text-2xl">We use the Best Tires in Our Cars</p>
          </div>
        </div>
        <div className="overflow-hidden 2xl:flex bg-gray-300">
          <img className="2xl:w-6xl sm:w-1xl w-[100vw] 2xl:rounded-xl rounded-2xl 2xl:m-4 shadow-lg" src="https://www.slashgear.com/img/gallery/12-best-car-engines-currently-in-production-today/l-intro-1679508866.jpg" />
          <div className="m-5">
          <p className="2xl:text-5xl text-3xl font-bold">Best Engines</p>
          <p className="mt-2 text-2xl">We use the v12 Engines in Our Cars</p>
          </div>
        </div>
    </>
  );
};

export default Home;