import React from 'react'

function List({ list }) {

  console.log(list);
  let {name, desc, dc, du} = list;

  return (
    <div>
      <h3>List</h3>
      <p>{name}</p>
      <p>{desc}</p>
      <p>{dc}</p>
      <p>{du}</p>     
    </div>
  )
}

export default List