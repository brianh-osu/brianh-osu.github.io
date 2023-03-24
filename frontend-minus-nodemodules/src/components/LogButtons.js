import React, { useState } from 'react';

function LogButton() {
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    setInputValue(inputValue + 1);
  }

  const handleDecrement = () => {
    setInputValue(inputValue - 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>-</button>
      <input type="number" readOnly step={1} value={inputValue} />
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default LogButton; 