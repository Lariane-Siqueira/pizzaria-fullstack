/* eslint-disable @next/next/no-img-element */
import React from "react";
import Right from "../Icons/Right";

export default function Hero() {
  return (
    <>
      <section className="hero mt-4">
        <div className="py-12">
          <h1 className=" text-4xl font-semibold">
            Everything
            <br />
            is better <br /> with a&nbsp;{" "}
            <span className="text-primary">Pizza</span>
          </h1>
          <p className="my-6 text-gray-500">
            Pizza is the missing piece that makes every day complete, a simple
            yet delicious joy in life
          </p>
          <div className="flex gap-4 text-sm">
            <button className="bg-primary uppercase flex items-center gap-2 text-white py-2 px-4 rounded">
              Order now
              <Right/>
            </button>
            <button className="flex border-0 text-gray-600 font-semibold items-center py-2">
              Learn more
              <Right />
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={"/pizza.png"}
            layout={"fill"}
            objectFit={"contain"}
            alt={"pizza"}
          />
        </div>
      </section>
    </>
  );
}
