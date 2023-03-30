import { useState, ChangeEvent } from "react";
import "./TextFilter.css";
import { Text1 } from "../../../Models/TextFilterModel";
import store from "../../../Redux/Store";
import { setTextInput } from "../../../Redux/TextFilterState";
import { useDispatch, useSelector } from "react-redux";



function TextFilter(): JSX.Element {
  const dispatch = useDispatch();

  const textInput = useSelector((state: Text1) => state.textInput);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    dispatch(setTextInput(newValue));
  };

  return (
    <div className="TextFilter">

    <input type="text" value={textInput} onChange={handleChange} />

      {/* 👇 Use the input value from state */}
      <p>Your_input: {store.getState().textReducer.textInput}</p>
    </div>
  );
}

export default TextFilter;


