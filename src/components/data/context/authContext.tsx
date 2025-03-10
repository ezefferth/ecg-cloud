import { createContext, useState } from "react";
import { Usuario } from "../../types/types";



type AuthContextType = {
  usuario?: Usuario;
  token?: string;
  setUsuario: (value: Usuario | undefined) => void;
  setToken: (value: string | undefined) => void;
  loading: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const [usuario, setUsuario] = useState<Usuario | undefined>();
  const [token, setToken] = useState<string | undefined>("");
  const [loading, setLoading] = useState(true);





  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        setUsuario,
        setToken,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}