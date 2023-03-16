import React from 'react';
import Card from './Card';

function CardsContainer() {

  const tempArray = [1, 2, 3];

  const cards = tempArray.map(card => <Card key={card}/>)
  
  return (
    <div>
      <h1>CardsContainer</h1>
      {cards}
    </div>
  )
}

export default CardsContainer