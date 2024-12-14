import React from 'react'

const Content = ({ setStatus }) => {
  return (
    <header>
      <h2>My Todos</h2>
      <form>
        <label htmlFor="option">Status filter</label>
        <select onChange={(e) => setStatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Not-Completed">Not-Completed</option>
          <option value="Completed">Completed</option>
        </select>
      </form>
    </header>
  );
};

export default Content