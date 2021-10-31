import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddEmployee } from "./components/AddEmployee";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ListEmployee } from "./components/ListEmployee";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ListEmployee}></Route>
            <Route path="/employees" component={ListEmployee}></Route>
            <Route path="/add-employee" component={AddEmployee}></Route>
            <Route path="/edit-employee/:id" component={AddEmployee}></Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
