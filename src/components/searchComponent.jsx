import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchComponent() {
  return (
    <>
      <form className="justify-content-center m-5 row">
        <div className="col col-11">
          <input
            type="text"
            placeholder="Enter city name, Country , Zip Code"
            className="form-control form-control-md "
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
