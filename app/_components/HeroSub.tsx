import React from "react";

function HeroSub() {
  return (
    <div className="m-0 p-20 bg-black">
      <div className="flex items-baseline justify-center pb-15">
        <h2 className="text-white border-3 px-8 py-3 border-indigo-500 rounded-4xl text-md shadow-[5px_5px_40px_15px_rgba(138,_43,_226,_0.4)]">
          ✨ Features ✨
        </h2>
      </div>
      <main className="my-8 mx-2 md:mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black">
        <div className="bg-black p-6 border-2 border-solid border-indigo-500">
          <h2 className="text-lg font-bold text-white mb-4 ">Make Notes</h2>
          <p className="text-gray-300">
            Rich Markdown editor for putting Ideas into words
          </p>
        </div>
        <div className="p-6 border-2  border-solid border-indigo-500 bg-black">
          <h2 className="text-lg font-bold text-white mb-4">Visual Pad</h2>
          <p className="text-gray-300">
            A Canvas to bring the Visualization to reality.
          </p>
        </div>
        <div className="p-6 border-2  border-solid border-indigo-500 bg-black">
          <h2 className="text-lg font-bold text-white mb-4">Save Ideas</h2>
          <p className="text-gray-300">
            Not just visualize and draw but also keep the Ideas saved.
          </p>
        </div>
      </main>
    </div>
  );
}

export default HeroSub;
