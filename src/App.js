import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [editingText, setEditingText] = useState("");

  // Simulated fetch
  useEffect(() => {
    setItems(["Sample Item 1", "Sample Item 2"]);
  }, []);

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    setEditingItem(index);
    setEditingText(items[index]);
  };

  const saveItem = () => {
    const updatedItems = [...items];
    updatedItems[editingItem] = editingText;
    setItems(updatedItems);
    setEditingItem(null);
    setEditingText("");
  };

  return (
    <div className="App">
      <h1>CRUD App</h1>
      <div className="add-item">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
        />
        <button onClick={addItem}>Add</button>
      </div>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {editingItem === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={saveItem}>Save</button>
              </>
            ) : (
              <>
                <span>{item}</span>
                <button onClick={() => editItem(index)}>Edit</button>
                <button onClick={() => deleteItem(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
