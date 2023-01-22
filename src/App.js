import Nav from './Components/Nav/Nav'
import './App.css'
import ProductList from './Components/ProductList/ProductList'

import { useSelector } from "react-redux"
import Cart from './Components/Cart/Cart'

function App() {
  const navReducer = useSelector((state) => state.navReducer)
  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <div>
        {
          navReducer.home ? (
            <ProductList />
          ) : (
            <Cart />
          )
        }
      </div>
    </div>
  );
}

export default App;
