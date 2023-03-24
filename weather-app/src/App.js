import React from "react";
import { Provider } from "react-redux";
import WeatherStore from "./stateManagement/store";
import Router from "./routes";
const App = () => {
  return (
    <Provider store={WeatherStore}>
<Router/>
    </Provider>
  );
};

export default App;

