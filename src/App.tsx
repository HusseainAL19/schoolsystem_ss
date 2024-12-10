import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { routes } from "./lib/routes/approutes";
import { routesTypes } from "./lib/types/types";

function App() {
  localStorage.setItem("address", "5.5.5.109:3434/");
  return (
    <>
      <Routes>
        {routes &&
          routes.map((singleRoute: routesTypes) => {
            return (
              <Route
                path={singleRoute.routePath}
                element={<singleRoute.routeComp />}
              />
            );
          })}
      </Routes>
    </>
  );
}

export default App;
