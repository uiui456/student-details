import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

const HomePage = React.lazy(() => import("./containers/HomePage/HomePage.web"));
const NotFound = React.lazy(() => import("./containers/NotFound/NotFound.web"));
const DetailView = React.lazy(() =>
  import("./containers/DetailView/DetailView.web")
);
const TableView = React.lazy(() =>
  import("./containers/TableView/TableView.web")
);

function App() {
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" render={() => <HomePage />} />
        <Route path="/TableView" render={() => <TableView />} />
        <Route path="/studentDetails" render={() => <DetailView />} />
        {/* </Suspense>
        <Suspense fallback={<div>Loading...</div>}> */}
        {/* <Route render={() => <NotFound />} /> */}
      </Suspense>
    </Switch>
  );
}

export default React.memo(App);
