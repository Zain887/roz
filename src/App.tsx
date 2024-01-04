import React, { useEffect, useState } from 'react';
import './App.css';
import MenuBar from './assets/MenuBar';
import ItemDisplay from './assets/ItemDisplay';

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const handleMenuItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };
  
  useEffect(() => {}, [selectedItemIndex]);
  
  return (
    <>
      <MenuBar ItemIndex={selectedItemIndex} onItemClick={handleMenuItemClick} />
      <ItemDisplay category={selectedItemIndex} />
    </>
  );
}

export default App;
