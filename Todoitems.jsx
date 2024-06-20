import React from "react";

function TODO({ items, removeItem }) {
  return (
    <ul>
      {items.map((todoItem, index) => (
        <li key={index} onClick={() => removeItem(index)}>
          {todoItem}
        </li>
      ))}
    </ul>
  );
}

export default TODO;
