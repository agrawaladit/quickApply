import './App.css';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Jobs from "./components/Jobs";

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrimarySearchAppBar from "./components/AppBar";
import Profile from "./components/Profile";
import Recruiter from "./components/Recruiter";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <PrimarySearchAppBar/>
            <main style={{padding: "50px"}}>
                <Switch >
                    <Route path="/" component={SignIn} exact />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/jobs" component={Jobs} />
                    <Route path="/recruiter" component={Recruiter} />
                </Switch>
            </main>
        </BrowserRouter>
    </div>
  );
}

export default App;
