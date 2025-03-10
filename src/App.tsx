import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/data/context/authContext";
import Routers from "./components/routes";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
