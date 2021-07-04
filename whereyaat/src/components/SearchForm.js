import React from "react";
import "./styles.css";

function SearchForm(props) {
  return (
    <div className="container">
      <div className="search">
        <form className="form-inline" onSubmit={props.handleFormSubmit}>
          <input
            value={props.value}
            onChange={props.handleInputChange}
            type="search"
            className="form-control mt-2"
            id="searchInput"
            placeholder="Employee Search Bar"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
