import React from "react";

export default function ServiceInput({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="10">It was good 10%</option>
        <option value="0">Dissatified 0%</option>
        <option value="5">It was ok 5%</option>
        <option value="15">It was amazing 15%</option>
      </select>
    </div>
  );
}
