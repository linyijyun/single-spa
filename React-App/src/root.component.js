import { BrowserRouter as Router, Switch, Link, Route, Redirect } from "react-router-dom";

import About from './components/About.tsx'
import Home from './components/Home.tsx'


export default function Root(props) {
  return <Router basename="/react">
    <div>
      <Link to="/" >Home React</Link>
      <div></div>
      <Link to="/about" >Home about</Link>
    </div>
    <Switch>
      <Route path="/" exact={true} component={Home}>
      </Route>
      <Route path="/about" component={About}>
      </Route>
      <Redirect to='/'></Redirect>
    </Switch>
  </Router>
}
