import React, { useState } from "react";

function MultipleCheckBox() {
  const [isHtml, setIsHtml] = useState(false);
  const [isCss, setIsCss] = useState(false);
  const [isJs, setIsJs] = useState(false);

  return (
    <div className="select-none">
      <label htmlFor="html">
        <input
          id="html"
          checked={isHtml}
          type="checkbox"
          onChange={(e) => setIsHtml(e.target.checked)}
        />
        Html
      </label>
      <br />
      <label htmlFor="css">
        <input
          id="css"
          checked={isCss}
          type="checkbox"
          onChange={(e) => setIsCss(e.target.checked)}
        />
        Css
      </label>
      <br />
      <label htmlFor="js">
        <input
          id="js"
          checked={isJs}
          type="checkbox"
          onChange={(e) => setIsJs(e.target.checked)}
        />
        Js
      </label>
      <br />

      {isHtml && <p>Html selected</p>}
      {isCss && <p>Css selected</p>}
      {isJs && <p>Js selected</p>}
    </div>
  );
}

export default MultipleCheckBox;
