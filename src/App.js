import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Page404 from "./pages/404";
import Home from "./pages/Home";
import Question from "./pages/Question";

function App() {
    return (
        <div>
            <Router>
                <Loader />
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/quiz">
                            <Question />
                        </Route>
                        <Route path="*">
                            <Page404 />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
