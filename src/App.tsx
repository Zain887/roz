import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import PrivateRoute from './PrivateRoute';
import Login from './login/Login';
import ProductList from './components/ProductList';
import Home from './Home';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/smartphones" element={<ProductList category='smartphones' />} />
          <Route path="/laptops" element={<ProductList category='laptops' />} />
          <Route path="/fragrances" element={<ProductList category='fragrances' />} />
          <Route path="/skincare" element={<ProductList category='skincare' />} />
          <Route path="/groceries" element={<ProductList category='groceries' />} />
          <Route path="/home-decoration" element={<ProductList category='home-decoration' />} />
          <Route path=":category/:productId" element={<ProductDetails />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
