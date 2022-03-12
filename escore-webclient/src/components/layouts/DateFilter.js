import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import DatePicker from "react-datepicker";

// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="date-filter">
      {/*
      <NavLink to={"/"} className="date-filter-nav">
        <BsFillCaretLeftFill className="date-filter-icon"></BsFillCaretLeftFill>
        <span className="hide-visually">Previous Day</span>
      </NavLink>
      */}
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        className="date-filter-selector"
      />
      {/*
      <NavLink to={"/"} className="date-filter-nav">
        <BsFillCaretRightFill className="date-filter-icon"></BsFillCaretRightFill>
        <span className="hide-visually">Next Day</span>
      </NavLink>
    */}
    </div>
  );
};

export default DateFilter;
