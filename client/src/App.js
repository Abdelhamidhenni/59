import "./App.css";
import React, { Suspense } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
const AppHeader = React.lazy(() => import("./components/AppHeader"));
const IndicatorsGlobal = React.lazy(() =>
  import("./components/IndicatorsGlobal")
);
const IndicatorsCard = React.lazy(() => import("./components/IndicatorsCard"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <AppHeader />
        <Container maxWidth="md" component="main">
          <IndicatorsGlobal />
          <IndicatorsCard />
        </Container>
      </Suspense>
    </div>
  );
}

export default App;
