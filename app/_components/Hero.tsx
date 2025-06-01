import React from "react";

function Hero() {
  return (
    <section className="bg-black h-screen lg:grid">
      <div className="flex items-baseline justify-center pt-10">
        <h2 className="text-white border-3 px-6 py-2 border-indigo-500 rounded-4xl text-sm shadow-[5px_5px_40px_5px_rgba(138,_43,_226,_0.4)]">
          Introducing Visual Thinking Pad ✨
        </h2>
      </div>
      <div className="mx-auto w-screen max-w-screen-xl px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-7xl p-5 font-medium text-white sm:text-5xl tracking-tight">
            Understand User Flow and
            <strong className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}
              Visualize{" "}
            </strong>
            Ideas
          </h1>

          <p className="mt-4 text-base text-pretty text-gray-400 sm:text-lg/relaxed">
            Convert Ideas into Visuals and get a big bicture
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a
              className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
              href="#"
            >
              Get Started
            </a>

            <a
              className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-black"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
