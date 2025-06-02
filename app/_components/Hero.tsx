import React from "react";

function Hero() {
  return (
    <section className="bg-black">
      <div className="flex items-baseline justify-center pt-15">
        <h2 className="text-white border-3 px-6 py-2 border-indigo-500 rounded-4xl text-sm shadow-[5px_5px_40px_15px_rgba(138,_43,_226,_0.4)]">
          Introducing Visual Thinking Pad ✨
        </h2>
      </div>
      <div className="mx-auto h-screen max-w-screen-xl px-4 py-25 lg:flex">
        <div className="mx-auto max-w-prose text-center">
          <h1 className="text-3xl text-white font-semibold sm:text-5xl leading-15">
            Notes & diagrams for better
            <strong className="bg-gradient-to-r from-emerald-500 to-indigo-500 bg-clip-text text-transparent font-bold">
              {" "}
              Visual Experience.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-slate-200">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
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
