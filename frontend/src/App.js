import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import Checkout from './screens/Checkout';
function App() {

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  return (

    <BrowserRouter>

    <div className="grid-container">
    <header className="header">
      <div className="brand">
       <Link to='/' class="brand-logo">KarachiExpress</Link>
      </div>
      <div className="header-links">
      <Link to="/cart/:id?"  class="brand-logo">CartScreen</Link>
      
      {userInfo ? (
              <Link to="/profile"  class="brand-logo">{userInfo.name}</Link>
            ) : (
              <Link to="/signin"  class="brand-logo">Sign In</Link>
            )}
            {/* <Link to="/register">Sign In</Link> */}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#" class="brand-logo">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/products"  class="brand-logo">Products</Link>
                  </li>
                </ul>
              </div>
            )}
      </div>
    </header>
    <main className="main">
      <div className="content">

      <Route path="/" exact={true} component={HomeScreen}></Route>
      <Route path="/product/:id"  component={ProductScreen}></Route>
      <Route path="/cart/:id?"  component={CartScreen}></Route>
      <Route path="/signin"  component={SigninScreen}></Route>
      <Route path="/register" component={RegisterScreen} />
      <Route path="/products" component={ProductsScreen} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/checkout" component={Checkout} />
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
