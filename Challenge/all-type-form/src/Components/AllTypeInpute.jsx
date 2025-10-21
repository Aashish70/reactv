import React from "react";
import { useState } from "react";

function AllTypeInpute() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    textarea: "",
    checkbox: false,
    radio: "",
    select: "",
    date: "",
    color: "#000000",
    file: null,
    range: 50,
    skills: [],
  });

  const handleChange = (e) => {
    const { name, type, value, checked, files } = e.target;

    if (type === "checkbox" && name === "skills") {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter((skill) => skill !== value);
      setFormData({ ...formData, skills: updatedSkills });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data: ", formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">All Inputs Form</h2>
        {/* Name */}
        <div className="mb-8">
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="Enter your name"
          ></input>
        </div>

        {/* Eamil */}
        <div className="mb-8">
          <label>Email: </label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="Enter your email"
          ></input>
        </div>

        {/* Password */}
        <div className="mb-8">
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="Enter your password"
          ></input>
        </div>

        {/* Number */}
        <div className="mb-8">
          <label>Number: </label>
          <input
            name="number"
            type="number"
            value={formData.number}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="Enter your number"
          ></input>
        </div>

        {/* TextArea */}
        <div className="mb-8">
          <label>TextArea: </label>
          <input
            name="textarea"
            type="textarea"
            value={formData.textarea}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          ></input>
        </div>

        {/* Checkbox */}
        <div className="mb-8">
          <label>
            <input
              name="checkbox"
              type="checkbox"
              value={formData.checkbox}
              onChange={handleChange}
              className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
              placeholder="write something here.."
            ></input>
            Accept Terms
          </label>
        </div>

        {/* Radio */}
        <div className="mb-8">
          <label>Gender: </label>
          <label>
            male
            <input
              name="radio"
              type="radio"
              value="male"
              checked={formData.radio === "male"}
              onChange={handleChange}
              className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
              placeholder="write something here.."
            ></input>
          </label>
          <label>
            female
            <input
              name="radio"
              type="radio"
              value="female"
              checked={formData.radio === "female"}
              onChange={handleChange}
              className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
              placeholder="write something here.."
            ></input>
          </label>
        </div>

        {/* Select */}
        <div className="mb-8">
          <label>Country: </label>
          <select
            name="select"
            type="select"
            value={formData.select}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          >
            <option value="">Select</option>
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
          </select>
        </div>

        {/* Date */}
        <div className="mb-8">
          <label>Date of Birth: </label>
          <input
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          ></input>
        </div>

        {/* Color */}
        <div className="mb-8">
          <label>Favorite Color: </label>
          <input
            name="color"
            type="color"
            value={formData.color}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          ></input>
        </div>

        {/* File */}
        <div className="mb-8">
          <label>Upload File: </label>
          <input
            name="file"
            type="file"
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          ></input>
        </div>

        {/* Range */}
        <div className="mb-8">
          <label>Range: </label>
          <input
            name="range"
            type="range"
            min="0"
            max="100"
            value={formData.range}
            onChange={handleChange}
            className="p-2 bg-blue-100 focus:bg-green-50 focus:border-green-500 border border-gray-400 placeholder:italic rounded"
            placeholder="write something here.."
          ></input>
        </div>

        {/* Skills */}
        <div className="space-x-6">
          <label>Sills:</label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="html"
              checked={formData.skills.includes("html")}
              onChange={handleChange}
            ></input>
            HTML
          </label>

          <label>
            <input
              type="checkbox"
              name="skills"
              value="css"
              checked={formData.skills.includes("css")}
              onChange={handleChange}
            ></input>
            CSS
          </label>
          <label>
            <input
              type="checkbox"
              name="skills"
              value="js"
              checked={formData.skills.includes("js")}
              onChange={handleChange}
            ></input>
            JS
          </label>
        </div>

        {/* Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </>
  );
}

export default AllTypeInpute;
