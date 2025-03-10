import AuthProvider from "./components/data/context/authContext";
import Routers from "./components/routes";

function App() {
  return (
    <>
      <AuthProvider>
        <Routers />
      </AuthProvider>
    </>
  );
}

export default App;
