import React from "react";
import Image from "next/image";
import Banner from "../public/Banner.jpg";
import Navigation from "./(components)/Navigation";
import next from "next";

const Home = () => {
  return (
    <div className="min-h-full">
      <Navigation />
      <main className="bg-red-300 h-3/4">
        <div className="relative h-full">
          <Image
            src={Banner}
            alt="Banner image"
            objectFit="cover"
            className="h-full w-full"
            fill
          />
        </div>
      </main>
      <section className="py-9 px-7">
        <div className="mb-4">
          <h2 className="font-medium text-lg">Categories</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <div className=" w-72 h-72 rounded-lg overflow-hidden relative">
            <div className="h-full relative brightness-75">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDEyNjYxMzd8&ixlib=rb-4.0.3&q=80&w=600"
                alt="sofa"
                objectPosition="center"
                className="object-cover"
                fill
              />
            </div>
            <h4 className="absolute bottom-2 right-3 text-white font-medium text-xl">
              Couches & Sofas
            </h4>
          </div>
          <div className=" w-72 h-72 rounded-lg overflow-hidden relative">
            <div className="h-full relative brightness-75">
              <Image
                src="https://images.unsplash.com/photo-1592078615290-033ee584e267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDEyNjcwMzl8&ixlib=rb-4.0.3&q=80&w=600"
                alt="sofa"
                objectPosition="center"
                className="object-cover"
                fill
              />
            </div>
            <h4 className="absolute bottom-2 right-3 text-white font-medium text-xl">
              Chairs
            </h4>
          </div>
          <div className=" w-72 h-72 rounded-lg overflow-hidden relative">
            <div className="h-full relative brightness-75">
              <Image
                src="https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDEyNjcxNzd8&ixlib=rb-4.0.3&q=80&w=600"
                alt="sofa"
                objectPosition="center"
                className="object-cover"
                fill
              />
            </div>
            <h4 className="absolute bottom-2 right-3 text-white font-medium text-xl">
              Desks & Cabinets
            </h4>
          </div>
          <div className=" w-72 h-72 rounded-lg overflow-hidden relative">
            <div className="h-full relative brightness-75">
              <Image
                src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDEyNjc0Mjd8&ixlib=rb-4.0.3&q=80&w=600"
                alt="sofa"
                objectPosition="center"
                className="object-cover"
                fill
              />
            </div>
            <h4 className="absolute bottom-2 right-3 text-white font-medium text-xl">
              Lights & Lamps
            </h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
