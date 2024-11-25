import { useContext, useEffect, useState } from "react";
import Content from "./Coponenets/Content";
import Inputbox from "./Coponenets/Inputbox";
import List from "./Coponenets/List";
import TodoDataContext from "./Coponenets/Context API/InputsContext";
import axios from "axios";

function App() {
  
  const { task } = useContext(TodoDataContext);

  const [todos, setTodos] = useState([])

  const getAllTodos = async (status = "All") => {
    try {
      const { data } = await axios.get(`/todos/get/${status}`);
      if (data.todos.length) {
        setTodos(data.todos.reverse());
        return;
      }
      setTodos([]);
    } catch (error) {
      console.log(error.message);
    }
  };
 
  useEffect(() => {
        getAllTodos()
      },[task])

  return (
    <div className="App">
      <h1>My todo</h1>
      <Inputbox />
      <Content getAllTodos={getAllTodos} />

      <div className="todos">
        {todos.map((val, index) => {
          return (
            <List
              key={`${val.name}-${index}`}
              name={val.name}
              description={val.description}
              id={val._id}
              status={val.status}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
