import React from "react";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <div className="searchBar-container">
      <div className="logo-container">
        <h4 className="logo">
          <span>Reddit</span>Minimal
        </h4>
      </div>
      <div className="search-box">
        <Form.Control placeholder="search" type="text" id="inputText" />
      </div>
    </div>
  );
}

export default SearchBar;
