import React, { useState } from "react";
export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button onClick={addElement} className="btn btn-success" style={{ marginBottom: "5px" }}>
        Add Element
      </button>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {array.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", display: "flex", alignItems: "center", width: "200px", justifyContent: "space-between" }}>
              <span>{item}</span>
              <button
                onClick={() => deleteElement(index)}
                className="btn btn-danger"
                id="wd-delete-element-click"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
