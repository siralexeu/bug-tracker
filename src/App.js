import React from "react";
import { useSelector } from "react-redux";
import Login from "./Views/Pages/Login/login";
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Modificat de la Switch la Routes
=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
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
<<<<<<< HEAD
          <Routes> {/* Utilizat Routes în loc de Switch */}
            <Route path="/" element={<Dashboard />} /> {/* Corect utilizat element */}
=======
          <Switch>
            <Route path="/" exact>
              <Dashboard />
            </Route>
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
            <Route path="/viewbugs" element={<ViewBugPage />} />
            <Route
              path="/create"
              element={
                <div className="page-container">
                  <CreateBug title="Create Bug" />
                </div>
              }
            />
<<<<<<< HEAD
          </Routes>
=======
          </Switch>
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
        </>
      )}
    </Router>
  );
}

export default App;
