import React from 'react'
import Header from './Components/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './Components/Footer';
import './Style/main.css'
import './Style/reponsive.css'
import router from './router';


const App = () => {

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {router.map((item, index) =>
            <Route
              key={index}
              path={`${item.path}`}
              exact
              component={item.cpn}
            />)
          }
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}


export default App
