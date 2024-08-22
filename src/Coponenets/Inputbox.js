import React, { useContext } from "react";
import TodoDataContext from "./Context API/InputsContext";

const Inputbox = () => {

  const {
    inputDatas,
    inputName,
    setInputName,
    inputDescrip,
    setInputDescrip,
    handleUpdate,
    change
  } = useContext(TodoDataContext);

  return (
    <form className="inputs" onSubmit={(e)=>e.preventDefault()}>
      <input
        type="text"
        placeholder="Todo Name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Todo Description"
        value={inputDescrip}
        onChange={(e) => {
          setInputDescrip(e.target.value);
        }}
        required
      />
      {change ? (
        <button
          onClick={() => handleUpdate(inputName, inputDescrip)}
        >
         Update
        </button>
      ) : (
        <button
          onClick={() => inputDatas(inputName, inputDescrip)}
        >
          Add Tasks
        </button>
      )}
    </form>
  );
};

export default Inputbox;
