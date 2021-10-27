import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Album from './Album';
import Card from './Card';
import Frame from './Frame';
import Monogram from './Monogram';
import Login from './Login';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>


function App() {
  return (
    <Router>
      <div className="app">


        <Switch>
          <Route path="/frame">
            <Header />
            <Frame />
          </Route>

          <Route path="/monogram">
            <Header />
            <Monogram />
          </Route>

          <Route path="/card">
            <Header />
            <Card />
          </Route>

          <Route path="/album">
            <Header />
            <Album />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="">
            <Header />
            <Home />
          </Route>

        </Switch>


      </div>
    </Router>
  );
}
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
export default App;
