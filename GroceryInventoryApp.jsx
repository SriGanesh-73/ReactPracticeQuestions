// GroceryInventoryApp.jsx
import React, { useState, useEffect } from "react";
import "./GroceryInventoryApp.css";

const GroceryInventoryApp = () => {
  const [inventory, setInventory] = useState([]);
  const [form, setForm] = useState({ id: "", category: "Fruits", name: "", qty: "", mrp: "", sp: "" });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("inventory") || "[]");
    setInventory(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(inventory));
  }, [inventory]);

  const handleSubmit = () => {
    const exists = inventory.find(i => i.id === form.id);
    setInventory(exists ? inventory.map(i => i.id === form.id ? form : i) : [...inventory, form]);
    setForm({ id: "", category: "Fruits", name: "", qty: "", mrp: "", sp: "" });
  };

  return (
    <div>
      <nav><span>Grocery Manager</span><div><a href="#">Home</a><a href="#">Inventory</a></div></nav>
      <form>
        {Object.entries(form).map(([k, v]) => (
          k === "category" ? (
            <select key={k} value={v} onChange={e => setForm({ ...form, [k]: e.target.value })}>
              <option>Fruits</option><option>Vegetables</option><option>Dairy</option>
            </select>
          ) : (
            <input key={k} placeholder={k} value={v} onChange={e => setForm({ ...form, [k]: e.target.value })} />
          )
        ))}
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
      <table><thead><tr><th>Name</th><th>Category</th><th>Qty</th><th>SP</th></tr></thead>
        <tbody>{inventory.map(i => <tr key={i.id}><td>{i.name}</td><td>{i.category}</td><td>{i.qty}</td><td>{i.sp}</td></tr>)}</tbody>
      </table>
    </div>
  );
};

export default GroceryInventoryApp;
