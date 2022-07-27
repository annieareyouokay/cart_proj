import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    {id: 0, value: 0, name: "Ненужная вещь"}, 
    {id: 1, value: 5, name: "Вилка"}, 
    {id: 2, value: 0, name: "Ложка"},
    {id: 3, value: 0, name: "Тарелка"},
    {id: 4, value: 0, name: "Набор минималиста"}
  ];
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (id) => {
    const newCounters = counters.map(counter => {
      if (counter.id === id) {
        counter.value += 1;
      }
      return counter;
    });
    setCounters(newCounters);
  }

  const handleDecrement = (id) => {
    const newCounters = counters.map(counter => {
      if (counter.id === id && counter.value > 0) {
        counter.value -= 1;
      }
      return counter;
    });
    setCounters(newCounters);
  }

  const handleDelete = (id) => {
    const newCounters = counters.filter(counter=>counter.id !== id);
    setCounters(newCounters);
  }

  const handleReset = () => {
    setCounters(initialState);
  }
  return <>
    {counters.map((counter)=><Counter 
    key={counter.id} 
    {...counter}
    onDelete={handleDelete}
    onClickIncrement={handleIncrement}
    onClickDecrement={handleDecrement} />)}
    <button className="btn btn-primary btn-m2" onClick={handleReset}>Сброс</button>
  </>
}

export default CountersList;