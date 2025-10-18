/**
 * Controlled form component for entering and submitting search term
 */
import React, { useState } from "react";
const SearchForm = (props) => {
  const [inputText, setInputText] = useState("");

  // Updates state when user types in search box
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  };

  // Submits current input to parent component
  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(inputText);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="search-term">Search Equipment</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter equipment name"
            value={inputText}
            onChange={handleChangeInput}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
