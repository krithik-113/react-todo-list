import axios from 'axios';
import { createContext,useState } from 'react'

const TodoDataContext = createContext({})

export const InputsContext = ({ children }) => {
    let [change, setChange] = useState(false);
    const [task, setTask] = useState([]);

    const [ID,setID] = useState()

    let [inputName, setInputName] = useState("");
    let [inputDescrip, setInputDescrip] = useState("");
    
    

    const inputDatas = async (name, description) => {
      if (name.length === 0) {
      } else if (description.length === 0) {
      } else {
          await axios
            .post("https://todos-backend-jchp.onrender.com/todos/create", {
              name: inputName,
              description: inputDescrip,
            })
            .then((res) =>{})
            .catch((err) => console.log(err.message));
        
        setInputName("");
          setInputDescrip("")
      }
    }

    const handleUpdate = async (names, descriptions) => {
        setChange(false);
        await axios
          .put(`https://todos-backend-jchp.onrender.com/todos/edit/${ID}`, {
            name: names,
            description: descriptions,
          })
          .then((res) => alert(res.data.message))
          .catch((err) => console.log(err.message));
      setInputName("");
        setInputDescrip("");
    }

    //  Todo edition
    const handleEdit = async (id, name, description) => {
        setID(id);
        setInputName(name);
        setInputDescrip(description);
        setChange(true);
    }

    //  parent filter
    const parentFilter = async (e) => {
        await axios.get(` https://todos-backend-jchp.onrender.com/todos/status/${e}`)
            .then(res => {
                if (res.data.todo.length) {
                    setTask(res.data.todo);
                } else {
                    setTask(res.data.todo)
                    alert("No Data Found...!");
                  //   window.location.reload();
                }
               
            })
    }
    //  filter process initiated
    const handleInnerFilter = async (id,status) => {
        await axios.put(`https://todos-backend-jchp.onrender.com/todos/status/${id}`, {
          status
        }).then(res => {
            alert(res.data.message)
            // get_Todos()
            window.location.reload()
        })
        .catch(err=>console.log(err.message))
    }

    //  delete todos
     const handleDelete = async (id) => {
      await axios.delete(`https://todos-backend-jchp.onrender.com/todos/delete/${id}`)
          .then(res =>  setTask(res.data.todos))
         .catch(err=>console.log(err.message))
    }
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
        parentFilter,
      }}
    >
      {children}
    </TodoDataContext.Provider>
  );
}

export default TodoDataContext