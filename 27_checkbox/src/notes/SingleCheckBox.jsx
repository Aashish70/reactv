import React, { useState } from "react";

function SingleCheckBox() {
  const [isChecked, setIsChecked] = useState(false);

  console.log(isChecked);

  return (
    <div className="select-none">
      <label htmlFor="tc">
        <input
          id="tc"
          checked={isChecked}
          type="checkbox"
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Terms and Condition
      </label>
    </div>
  );
}

export default SingleCheckBox;
