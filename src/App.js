import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import CatergoryContainer from './components/CatergoryContainer';

function App() {
  return (
    <div>
      {/* <Route>
        <div>
        <Switch>
          <Route exact path="/">
           < HomePage/>
          </Route>
          <Route exact path="/brand">
          </Route>
        </Switch>
        </div>
      </Route> */}

      <h1>Bar App</h1>
      <CatergoryContainer />
    </div>
  );
}

export default App;
