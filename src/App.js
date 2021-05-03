import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import BodyPart from './Component/BodyPart'
import Header from './Header'
import SignupPage from './Component/SignupPage'

function App() {
  return (
    <>
      
      <Header />
      
      <Switch>

        <Route exact path="/" component={BodyPart}/>
        <Route path="/signup" component={SignupPage}/>

      </Switch>
      
    </>
  );
}

export default App;
