import React, { useState } from "react";

const Demo = () => {
  const arr = ["Ashish", "Rohit", "Vicky", "Budhi"];
  const [checked, setChecked] = useState([]);
  const checkBoxValue = (e) => {
    let arr1 = [...checked];
    if (e.target.checked) {
      arr1.push(e.target.value);
      setChecked(arr1);
    } else {
      arr1.splice(arr1.indexOf(e.target.value), 1);
      setChecked(arr1);
    }
  };

  return (
    <div>
      {arr.map((array, index) => (
        <>
          <input
            type="checkbox"
            id={index}
            name="vehicle2"
            value={array}
            onClick={checkBoxValue}
          />
          <label>{array}</label>
        </>
      ))}
      <h1>{checked}</h1>
    </div>
  );
};

export default Demo;
