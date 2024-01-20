import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './assets/MenuBar';
import ItemDisplay from './assets/ItemDisplay';
import NewArrivals from './pages/NewArrivals';
import SalesItem from './pages/SalesItem';
import FlatHeels from './pages/FlatHeels';
import BlockHeels from './pages/BlockHeels';
import Shoes from './pages/Shoes';
import Sandals from './pages/Sandals';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);

  const handleMenuItemClick = (index: number) => {
    setSelectedItemIndex(index);
  };

  return (
    <Router>
      <>
        <MenuBar ItemIndex={selectedItemIndex} onItemClick={handleMenuItemClick} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ItemDisplay category={selectedItemIndex} />} />
          <Route element={<PrivateRoute />}>
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/sales-item" element={<SalesItem />} />
            <Route path="/flat-heels" element={<FlatHeels />} />
            <Route path="/block-heels" element={<BlockHeels />} />
            <Route path="/shoes" element={<Shoes />} />
            <Route path="/sandals" element={<Sandals />} />
          </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
