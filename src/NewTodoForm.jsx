import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  const handlerSubmit = (e) => {
    e.preventDefault();

    if(newItem === "") return

    onSubmit(newItem)

    setNewItem("");
  };

  return (
    <form onSubmit={handlerSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
