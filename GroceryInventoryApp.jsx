// File: GroceryInventoryApp.jsx import React, { useState, useEffect } from "react";

const GroceryInventoryApp = () => { const [inventory, setInventory] = useState([]); const [formData, setFormData] = useState({ id: "", category: "Fruits", name: "", quantity: "", mrp: "", price: "", }); const [isEditing, setIsEditing] = useState(false);

useEffect(() => { const storedItems = JSON.parse(localStorage.getItem("inventory")) || []; setInventory(storedItems); }, []);

useEffect(() => { localStorage.setItem("inventory", JSON.stringify(inventory)); }, [inventory]);

const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

const validateForm = () => { const { id, category, name, quantity, mrp, price } = formData; if (!id || !category || !name || !quantity || !mrp || !price) { alert("All fields are required."); return false; } return true; };

const handleSubmit = (e) => { e.preventDefault(); if (!validateForm()) return;

if (isEditing) {
  setInventory((prev) =>
    prev.map((item) => (item.id === formData.id ? formData : item))
  );
  setIsEditing(false);
} else {
  setInventory((prev) => [...prev, formData]);
}
setFormData({ id: "", category: "Fruits", name: "", quantity: "", mrp: "", price: "" });

};

const handleEdit = (item) => { setFormData(item); setIsEditing(true); };

const handleDelete = (id) => { setInventory((prev) => prev.filter((item) => item.id !== id)); };

const handleReset = () => { setFormData({ id: "", category: "Fruits", name: "", quantity: "", mrp: "", price: "" }); setIsEditing(false); };

return ( <div className="font-sans"> {/* Navbar */} <nav className="flex justify-between p-4 bg-green-700 text-white"> <div className="font-bold">Grocery Manager</div> <div className="space-x-4"> <a href="#">Home</a> <a href="#list">Inventory List</a> <a href="#form">Add Product</a> </div> </nav>

{/* Inventory Form Section */}
  <section id="form" className="p-4">
    <h2 className="text-xl mb-4">{isEditing ? "Edit Product" : "Add Product"}</h2>
    <form onSubmit={handleSubmit} className="grid gap-2 max-w-md">
      <input
        name="id"
        value={formData.id}
        onChange={handleChange}
        placeholder="Product ID"
        className="p-2 border"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="p-2 border"
      >
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Dairy</option>
      </select>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Product Name"
        className="p-2 border"
      />
      <input
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity"
        className="p-2 border"
      />
      <input
        name="mrp"
        value={formData.mrp}
        onChange={handleChange}
        placeholder="MRP"
        className="p-2 border"
      />
      <input
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Selling Price"
        className="p-2 border"
      />
      <div className="flex gap-2">
        <button type="submit" className="p-2 bg-blue-600 text-white">
          {isEditing ? "Update" : "Submit"}
        </button>
        <button type="button" onClick={handleReset} className="p-2 bg-gray-400 text-white">
          Reset
        </button>
      </div>
    </form>
  </section>

  {/* Inventory Table Section */}
  <section id="list" className="p-4">
    <h2 className="text-xl mb-4">Inventory List</h2>
    <table className="w-full border">
      <thead className="bg-gray-200">
        <tr>
          <th className="border p-2">Product Name</th>
          <th className="border p-2">Category</th>
          <th className="border p-2">Quantity</th>
          <th className="border p-2">Selling Price</th>
          <th className="border p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id} className="text-center">
            <td className="border p-2">{item.name}</td>
            <td className="border p-2">{item.category}</td>
            <td className="border p-2">{item.quantity}</td>
            <td className="border p-2">{item.price}</td>
            <td className="border p-2">
              <button onClick={() => handleEdit(item)} className="mr-2 text-blue-600">Edit</button>
              <button onClick={() => handleDelete(item.id)} className="text-red-600">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
</div>

); };

export default GroceryInventoryApp;

