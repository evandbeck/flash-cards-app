import React from 'react';
import List from './List';

function ListsContainer() {

  // axios get list from API

  // test list
  const testList = [
  {name: "List1",
  desc: "This is List1",
  dc: "March",
  du: "April"},
  {name: "List2",
  desc: "This is List2",
  dc: "May",
  du: "June"},
  {name: "List3",
  desc: "This is List3",
  dc: "August",
  du: "September"}]

  const lists = testList.map(list => <List list={list}/>)

  return (
    <div>
      <h1>ListsContainer</h1>
      {lists}
    </div>
  )
}

export default ListsContainer