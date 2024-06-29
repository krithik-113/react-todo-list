import React from 'react'

const Content = ({ parentFilter }) => {
  const options = [
    { label: "All", value: 1 },
    { label: "Not-Completed", value: 2 },
    { label: "Completed", value: 3 },
  ];
  return (
    <header>
      <h2>My Todos</h2>
      <main>
        <label htmlFor="option">Status filter</label>
        <select onChange={(e)=>parentFilter(e.target.value, options)}>
          {options.map((val) => {
            return <option
              key={val.value}
              value={val.label}
            >
              {val.label}</option>;
          })}
        </select>
      </main>
    </header>
  );
};

export default Content