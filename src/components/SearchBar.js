
import './SearchBar.css'
import React from "react";
import { useState } from "react";
export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="search-bar">
      <form action="" onSubmit={handleFormSubmit}>
        <label htmlFor="">Enter which image you need:-  </label>
        <input className="input" type="text" value={term} onChange={handleChange} />
      </form>
    </div>
  );
}
