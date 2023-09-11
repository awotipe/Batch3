import './App.css';
import Home from './Pages/Home/Home'
import Apps from './Pages/Apps/Apps'
import Find from './Pages/Fiind/Find'
import {BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/apps" exact component={Apps} />
            <Route path="/find" exact component={Find} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
