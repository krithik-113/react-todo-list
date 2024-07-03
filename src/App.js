import Content from "./Coponenets/Content";
import Inputbox from "./Coponenets/Inputbox";
import List from "./Coponenets/List";
import { useState } from "react";

function App() {
  
  let Data = localStorage.getItem("todo");
  Data = JSON.parse(Data);
  let [change, setChange ]= useState(false)
  const [task, setTask] = useState(Data || []);
  let [inputName, setInputName] = useState("");
  let [inputDescrip, setInputDescrip] = useState("");

  function inputDatas(name, description) {
    if (name.length === 0) {
    } else if (description.length === 0) {
    } else {
      let todoList = [...task]
   
      todoList.push({
        id: task.length?task[task.length-1].id+1:1,
        name: name,
        description: description,
        status: "Not-Completed",
      });

      setTask(todoList);

      localStorage.setItem("todo", JSON.stringify(todoList));
      setInputName('')
      setInputDescrip('')
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
  function handleEdit(id, names, descriptions) {
    setInputName(names)
    setInputDescrip(descriptions)
    setChange(true)
  }
 
  function parentFilter(e) {
    let listItems = [...task]
    listItems = listItems.filter((val) => {
      return val.status == e
  })
    setTask(listItems)
    if (e == "All") {
      window.location.reload()
    }
  }
  function handleUpdate(id,names, descriptions) {
    setChange(false);
    let listItems = [...task]
    listItems = listItems.filter((val) => val.id !== id.id)
    listItems.push({
      id: task.length ? task[task.length - 1].id + 1 : 1,
      name: names,
      description: descriptions,
      status: "Not-Completed",
    })
    setTask(listItems)
    localStorage.setItem("todo", JSON.stringify(listItems))
    setInputName('')
    setInputDescrip('')
    
  }

  return (
    <div className="App">
      <h1>My todo</h1>
      <Inputbox
        inputDatas={inputDatas}
        change={change}
        handleUpdate={handleUpdate}
        inputName={inputName}
        setInputName={setInputName}
        inputDescrip={inputDescrip}
        setInputDescrip={setInputDescrip}
        task = {task}
      />
      <Content parentFilter={parentFilter} />

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
