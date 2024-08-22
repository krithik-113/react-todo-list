import React from 'react'
import { useContext } from 'react';
import TodoDataContext from './Context API/InputsContext';

const Content = () => {
 
  const {parentFilter} = useContext(TodoDataContext)
  return (
    <header>
      <h2>My Todos</h2>
      <form>
        <label htmlFor="option">Status filter</label>
        <select onChange={(e) => parentFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Not-Completed">Not-Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </form>
    </header>
  );
};

export default Content