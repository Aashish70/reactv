import React from "react";

function PopUp() {
  return (
    <div>
      <div className="w-[600px] h-[300px] rounded-2xl bg-slate-700">
        <div className="pt-15">
          <p>⚠️ Delete</p>
          <p className="mt-5">Are you sure you want to delete this?</p>
        </div>
        <div className="flex justify-center mt-10 gap-8">
          <button className="bg-red-600">No</button>
          <button className="bg-green-600">Yes</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
