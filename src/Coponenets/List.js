import React, { useContext } from "react";
import TodoDataContext from "./Context API/InputsContext";

const List = ({name,description,status,id}) => {
 
  const { handleDelete, handleEdit, handleInnerFilter } = useContext(TodoDataContext);

  return (
    <form className="box">
      <p>Name: {name}</p>
      <p>Description: {description} </p>
      <p>
        {/* {options} */}
        <label>Status</label>
        <select onChange={(e) => handleInnerFilter(id, e.target.value)}>
          <option>{status}</option>
          <option>{status === "Completed" ? "Not-Completed" : "Completed"}</option>
        </select>

      </p>
      <div className="buttons">
        <button
          className="edit"
          onClick={() => handleEdit(id,name, description)}
        >
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </form>
  );
};

export default List;
