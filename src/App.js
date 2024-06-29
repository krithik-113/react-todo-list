import Content from "./Coponenets/Content";
import Inputbox from "./Coponenets/Inputbox";
import List from "./Coponenets/List";
import { useState } from "react";

function App() {
  let Data = localStorage.getItem("todo");
  Data = JSON.parse(Data);
  let [change, setChange ]= useState(false)
  let [count, setCount] = useState(0);
  const [task, setTask] = useState(Data || []);
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  function inputDatas(name, description) {
    if (name.length === 0) {
    } else if (description.length === 0) {
    } else {
      let todoList = [...task];
      if (task.length > 0) {
        count = task.length + 1;
        setCount(count);
      } else {
        count = 1;
        setCount(count);
      }

      todoList.push({
        id: count,
        name: name,
        description: description,
        status: "Not-Completed"
      })

      setTask(todoList);

      localStorage.setItem("todo", JSON.stringify(todoList));
    }
  }

  function handleDelete(id) {
    let todolist = [...task];
    todolist = todolist.filter((val) => {
      return val.id === id ? false : val;
    });
    setTask(todolist);
    localStorage.setItem("todo", JSON.stringify(todolist));
  }

  function handleEdit(id, name, description) {
    setName(name);
    setDescription(description)
    setChange(true)
  }
 
  function parentFilter(e, labels) {
    let listItems = [...task]
    listItems = listItems.filter((val) => {
      return val.status == e
  })
    setTask(listItems)
    if (e == "All") {
      window.location.reload()
    }
  }
  function childFilter(e, labels) {
    
  }

  return (
    <div className="App">
      <h1>My todo</h1>
      <Inputbox
        inputDatas={inputDatas}
        name={name}
        description={description} 
        change = {change}
      />

      <Content
          parentFilter = {parentFilter}
      />

      <div className="todos">
        {task.map((val, index) => {
          return (
            <List
              key={`${val.name}-${index}`}
              name={val.name}
              description={val.description}
              id={val.id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              childFilter={childFilter}
              setTask={setTask}
              tasks={task}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
