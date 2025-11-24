import React, { useState } from 'react'

function GroupMultipleCheckBox() {
  //   const [isHtml, setIsHtml] = useState(false);
  //   const [isCss, setIsCss] = useState(false);
  //   const [isJs, setIsJsc] = useState(false);
  
      const [languages, setLanguages] = useState({
          html: false,
          css: false,
          Js: false,
      })

      const handleChange = () => {

      }
  
    return (
      <div className="select-none">
        <label htmlFor="html">
          <input
            id="html"
            checked={languages.html}
            type="checkbox"
            // onChange={(e) => setLanguages({ ...languages, html: e.target.checked})}
          />
          Html
        </label>
        <br />
        <label htmlFor="css">
          <input
            id="css"
            checked={languages.css}
            type="checkbox"
            onChange={(e) => setLanguages({ ...languages, css: e.target.checked})}
          />
          Css
        </label>
        <br />
        <label htmlFor="js">
          <input
            id="js"
            checked={languages.Js}
            type="checkbox"
            onChange={(e) => setLanguages({ ...languages, Js: e.target.checked})}
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

export default GroupMultipleCheckBox