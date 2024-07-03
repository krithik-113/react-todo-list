import React from "react";

const Inputbox = ({
  inputDatas,
  change,
  handleUpdate,
  inputName,
  setInputName,
  inputDescrip,
  setInputDescrip,
  task
}) => {

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
          onClick={() => handleUpdate(task.find(val=>val.name === inputName ? val.id:val),inputName, inputDescrip)}
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
