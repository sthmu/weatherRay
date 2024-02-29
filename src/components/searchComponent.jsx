import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchComponent(props) {
  const [searchText,setSearchText]=useState("");

  const handleSubmit=(event)=>{
    event.preventDefault();
    props.search(searchText);
  }

  const handleChange=(event)=>{
    setSearchText(event.target.value);
  }

  return (
    <>
      <form className="shadow-lg opacity-100 mb-5 rounded justify-content-center m-5 row" onSubmit={handleSubmit}>
        <div className="col col-11">
          <input
            type="text"
            placeholder="Enter city name, Country , Zip Code"
            className="form-control form-control-md "
            value={searchText}
            onChange={handleChange}
          />
        </div>
        <div className="col col-1">
          <button type="submit" className="btn btn-light border-light pb-1 ">
            Search
          </button>
        </div>
      </form>
    </>
  );
}
