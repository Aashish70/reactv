import React from "react";
import C from "./C";
import D from "./D";

function A() {
  return (
    <>
      <div className="bg-amber-300  h-full text-center p-10 text-3xl rounded-2xl border border-black border-dotted">
        <h1 className="text-center text-2xl">A</h1>
        <div className="grid grid-cols-2 gap-3 my-2">
          <C />
          <D />
        </div>
      </div>
    </>
  );
}

export default A;
