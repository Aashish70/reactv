import React, { useState } from "react";

function DyanmicSingleSelect() {
  const [language, setLanguage] = useState("");
  console.log(language);

  const languages = ["html", "css", "js", "c++", "c", "java", "python"];

  return (
    <>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="">-------Select------</option>
        {languages.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default DyanmicSingleSelect;
