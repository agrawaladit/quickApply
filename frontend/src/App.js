import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <main>
                <Switch>
                    <Route path="/" component={SignIn} exact />
                    <Route path="/signup" component={SignUp} />
                </Switch>
            </main>
        </BrowserRouter>
      {/*<SignUp/>*/}
    </div>
  );
}

export default App;
