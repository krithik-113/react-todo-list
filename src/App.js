import { useContext, useEffect } from "react";
import Content from "./Coponenets/Content";
import Inputbox from "./Coponenets/Inputbox";
import List from "./Coponenets/List";
import TodoDataContext from "./Coponenets/Context API/InputsContext";
import axios from "axios";

function App() {

  const { task,setTask } = useContext(TodoDataContext);

  useEffect(() => {
       axios.get("https://todos-backend-jchp.onrender.com/todos/get")
        .then((res) => setTask(res.data.todos))
        .catch((err) => console.log(err.message));
  }, [])
  
  

  return (
    <div className="App">
      <h1>My todo</h1>
      <Inputbox />
      <Content />

      <div className="todos">
        {task.length ? task.map((val, index) => {
          return (
            <List
              key={`${val.name}-${index}`}
              name={val.name}
              description={val.description}
              id={val._id}
              status={val.status}
            />
          );
        }):<></>}
      </div>
    </div>
  );
}

export default App;
