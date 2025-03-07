import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Login from "../../pages/login";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}
