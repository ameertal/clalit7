import "./FilterText.css";
import React, { useState, ChangeEvent } from "react";
import store from "../../../Redux/Store";

interface TextInputProps {
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextInput(props: TextInputProps) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

function FilterText(): JSX.Element {
    const [text, setText] = useState("");
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
      };
      return (
        <div>
          <TextInput
            placeholder="Filter tasks by task name..."
            value={text}
            onChange={handleInputChange}
          />
          {/* <p>You entered: {text}</p> */}
        </div>
      );
}

export default FilterText;

