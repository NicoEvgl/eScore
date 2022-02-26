import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

const DateFilter = () => {
  return (
    <div className="date-filter">
      <NavLink to={"/"} className="date-filter-nav">
        <BsFillCaretLeftFill className="date-filter-icon"></BsFillCaretLeftFill>
        <span className="hide-visually">Previous Day</span>
      </NavLink>
      <select onchange="" name="" id="" class="date-filter-selector">
        <option value="#">Mercredi 02 Février 2022</option>
        <option value="#" selected="">
          Jeudi 03 Février 2022
        </option>
        <option value="#">Vendredi 04 Février 2022</option>
      </select>
      <NavLink to={"/"} className="date-filter-nav">
        <BsFillCaretRightFill className="date-filter-icon"></BsFillCaretRightFill>
        <span className="hide-visually">Next Day</span>
      </NavLink>
    </div>
  );
};

export default DateFilter;
