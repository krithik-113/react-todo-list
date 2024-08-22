import { useContext, useEffect } from "react";
import Content from "./Coponenets/Content";
import Inputbox from "./Coponenets/Inputbox";
import List from "./Coponenets/List";
import TodoDataContext from "./Coponenets/Context API/InputsContext";

function App() {

  const { task, get_Todos } = useContext(TodoDataContext);

  useEffect(() => {
    get_Todos();
  },[])

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
