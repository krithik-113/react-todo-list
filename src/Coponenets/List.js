import React from "react";

const List = ({
  name,
  description,
  id,
  handleDelete,
  handleEdit,
  setTask,
  tasks}) => {
  const options = [
    { label: "Not-Completed", value: 1 },
    { label: "Completed", value: 2 },
  ];

  return (
    <div className="box">
      <p>Name: {name}</p>
      <p>Description: {description} </p>
      <p>
        <label htmlFor="option">Status</label>
        <select 
          onChange={(e) => {
            tasks = tasks.map((val) => {
               return val.id === id ? {...val, status: e.target.value }: val})
            setTask(tasks)
            localStorage.setItem("todo", JSON.stringify(tasks));
          }}
        >
          {options.map((val) => {
            return <option
              key={val.value}
              value={val.label}
            >
              {val.label}</option>;
          })}
        </select>
      </p>
      <div className="buttons">
        <button
          className="edit"
          onClick={() => handleEdit(id, name, description)}
        >
          Edit
        </button>
        <button className="delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default List;
