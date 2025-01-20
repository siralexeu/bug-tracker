import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Views/sidebar/sidebar";
import ViewBugPage from "./Views/Pages/viewBugs";
import CreateBug from "./Views/Components/Bug Create/bugForm";
import Dashboard from "./Views/Pages/Dashboard/dashboard";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
            <Route path="/viewbugs" element={<ViewBugPage />} />
            <Route
              path="/create"
              element={
                <div className="page-container">
                  <CreateBug title="Create Bug" />
                </div>
              }
            />
          </Switch>
        </>
      )}
    </Router>
  );
}

export default App;
