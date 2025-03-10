import { Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";
import PrivateRoute from "./privateRoutes";
import Dashboard from "../../pages/dashboard";
import Pacientes from "../../pages/pacientes";
import ConfigPacientes from "../../pages/configPacientes";
import ConfigUser from "../../pages/configUser";

export default function Routers() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      >
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/pacientes"
          element={<Pacientes />}
        />
        <Route
          path="/config/pacientes"
          element={<ConfigPacientes />}
        />
        <Route
          path="/config/usuario"
          element={<ConfigUser />}
        />
      </Route>
      <Route
        path="/login"
        element={<Login />}
      />
    </Routes>
  );
}
