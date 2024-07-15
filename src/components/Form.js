import react from 'react';

const Form = ({setInputData,todos,setTodos,inputData,setStatus}) => {
    const inputTextHandle = (e) => {
        setInputData(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos,{text:inputData,complete:false,id:parseInt(Math.random()*1000)}]);
        setInputData("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }
    return (
        <form>
      <input value={inputData} onChange={inputTextHandle} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}
export default Form;