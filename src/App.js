import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import CategoryContainer from './components/CategoryContainer';

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
      <CategoryContainer />
    </div>
  );
}

export default App;
