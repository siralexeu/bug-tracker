import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { useHistory } from "react-router-dom";
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
import { getBugs } from "../../../Controllers/Redux/bugSlice";
import Card from "../../Components/Dashboard/card";

export default () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);
<<<<<<< HEAD
  const navigate = useNavigate();
=======
  const browserHistory = useHistory();
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
  let highCount = 0;
  let midCount = 0;
  let lowCount = 0;
  if (bugs != undefined) {
    highCount = filterBugs(1);
    midCount = filterBugs(2);
    lowCount = filterBugs(3);
  }

  function redirect() {
<<<<<<< HEAD
    navigate("/viewbugs");
=======
    browserHistory.push("/viewbugs");
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a
  }

  function filterBugs(priority) {
    return bugs.filter((bug) => {
      return bug.priority == priority;
    });
  }

  useEffect(() => {
<<<<<<< HEAD
    dispatch(getBugs());
  }, [dispatch]);
=======
    dispatch(getBugs);
  }, [bugs == undefined]);
>>>>>>> fa51d84dcad7e89172ce15cf4023b93dc017cb7a

  return (
    <div className="page-container">
      <Card priority="1" count={highCount.length} clicked={redirect} />
      <Card priority="2" count={midCount.length} clicked={redirect} />
      <Card priority="3" count={lowCount.length} clicked={redirect} />
    </div>
  );
};
