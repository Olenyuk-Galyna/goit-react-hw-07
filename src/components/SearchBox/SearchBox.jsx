import React, { useId } from "react";
import css from "./SearchBox.module.css";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const value = useSelector(selectNameFilter);
  const dispatch = useDispatch();
  return (
    <div>
      <label className={css.label}>
        <span className={css.text}>Find contact by name</span>
        <input
          type="text"
          value={value}
          onChange={(e) => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
}
