import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Breeds from './Pages/Other/Breeds/Breeds';
import Order from './Pages/Access/Order/Order';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Access/Dashboard/Dashboard';

function App() {

  return (
    <div className="App">

      <AuthProvider>

        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/breeds">
              <Breeds></Breeds>
            </Route>
           
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <PrivateRoute path="/order/:breedId">
              <Order></Order>
            </PrivateRoute>

            <PrivateRoute path="/addPlace">
              {/* <AddPlace></AddPlace> */}
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
