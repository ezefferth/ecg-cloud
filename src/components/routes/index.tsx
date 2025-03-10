import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import PrivateRoute from "./privateRoutes";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
