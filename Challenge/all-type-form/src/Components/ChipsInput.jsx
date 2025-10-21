import React, { useState } from "react";

function ChipsInput() {
  const [text, setText] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = (e) => {
    if (e.keyCode === 13) {
      if (text.trim() === "") return;
      if (!tags.includes(text.trim())) {
        setTags([...tags, text.trim()]); // ✅ Immutable way
      }
      setText("");
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 bg-gray-700 h-screen w-full">
      <h1 className="text-4xl text-amber-100 mb-10">Chips Input</h1>
      <div className="flex gap-4">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={addTag}
          placeholder="Enter your skills..."
          className="p-2 w-[500px] bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
        />
      
      </div>


      <div className="flex flex-wrap gap-2 w-[500px] scroll h-[150px] p-3 rounded-md min-h-[80px]">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-2 bg-blue-500 text-white h-8 px-2 rounded"
          >
            {tag}
            <button
              onClick={() => removeTag(index)}
              className="text-black font-bold hover:text-red-300"
            >
              ×
            </button>
          </span>
        ))}
      </div>

      
    </div>
  );
}

export default ChipsInput;
