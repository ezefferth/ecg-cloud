import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./components/data/context/authContext";
import Routers from "./components/routes";
import DataProvider from "./components/data/context/dataContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <Routers />
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
