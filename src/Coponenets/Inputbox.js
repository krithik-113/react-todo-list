import React from "react";
import { useState } from "react";

const Inputbox = ({
  inputDatas,
  name,
  description,
  editing,
  change
}) => {
  let [inputName, setInputName] = useState("");
  let [inputDescrip, setInputDescrip] = useState('')

  return (
    <form className="inputs" >
      <input
        type="text"
        placeholder="Todo Name"
        value={name.length === 0 ? inputName : name}
        onChange={(e) => {
          setInputName(e.target.value)
        }
        }
        required
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={description.length === 0 ? inputDescrip : description}
        onChange={(e) => {setInputDescrip(e.target.value)}}
        required
      />
      <button type="submit" onClick={() => inputDatas(inputName, inputDescrip)}
      >
        {change === true ? "Update" : "Add Tasks"}
      </button>
    </form>
  );
};

export default Inputbox;
