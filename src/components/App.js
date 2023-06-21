import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const getCounterClass = () => {
    if (counter % 3 === 0 && counter % 5 === 0) {
      return 'fizzbuzz';
    } else if (counter % 3 === 0) {
      return 'fizz';
    } else if (counter % 5 === 0) {
      return 'buzz';
    } else {
      return 'normal';
    }
  };

  return (
    <div id="main">
      <button id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <div id="counter" className={getCounterClass()}>
        {counter}
      </div>
      <button id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;
