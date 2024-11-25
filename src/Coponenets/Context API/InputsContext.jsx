import axios from "axios";
import { createContext, useState } from "react";

const TodoDataContext = createContext({});

export const InputsContext = ({ children }) => {
  let [change, setChange] = useState(false);
  const [task, setTask] = useState([]);

  const [ID, setID] = useState();

  let [inputName, setInputName] = useState("");
  let [inputDescrip, setInputDescrip] = useState("");

  const inputDatas = async (name, description) => {
    if (!name || !description) return;
    try {
      const { data } = await axios.post("/todos/create", { name, description });
      if (data.todos.length) {
        setTask(data.todos);
        setInputName("");
        setInputDescrip("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = async (name, description) => {
    try {
      const {data} = await axios.put(`/todos/edit/${ID}`, { name, description});
      setChange(false);
      setInputName("");
      setInputDescrip("");
      if (data.todos.length) {
        setTask(data.todos)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  //  Todo edition
  const handleEdit = async (id, name, description) => {
    setID(id);
    setInputName(name);
    setInputDescrip(description);
    setChange(true);
  };

  //  filter process initiated
  const handleInnerFilter = async (id, status) => {
    await axios
      .put(`/todos/status/${id}`, {
        status,
      })
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      })
      .catch((err) => console.log(err.message));
  };

  //  delete todos
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/todos/delete/${id}`);
      if (data.todos.length) {
        setTask(data.todos);
        return;
      }
      setTask({});
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <TodoDataContext.Provider
      value={{
        inputDatas,
        inputName,
        setInputName,
        handleUpdate,
        inputDescrip,
        setInputDescrip,
        change,
        task,
        setTask,
        handleDelete,
        handleEdit,
        handleInnerFilter,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
};

export default TodoDataContext;
