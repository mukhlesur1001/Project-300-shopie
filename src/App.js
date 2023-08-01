import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import Contact from './Component/Contact/Contact';
import Order from './Component/Order/Order';
import Login from './Component/Login/Login';
import Register from './Component/Login/Register';


function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home.html">
            <Home></Home>
          </Route>
          <Route path="/shop.html">
            <Shop></Shop>
          </Route>
          <Route path="/order.html">
          <Order></Order>
          </Route>
          <Route path="/contact.html">
            <Contact></Contact>
          </Route>
          <Route path="/login.html">
            <Login></Login>
          </Route>
          <Route path="/register.html">
           <Register></Register>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>

    </div>

  );
}

export default App;
