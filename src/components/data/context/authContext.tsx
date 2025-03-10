import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { Usuario } from "../../types/types";
import { Firebase } from "../../firebase";
import { useNavigate } from "react-router-dom";

type User = {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
};

type AuthContextType = {
  usuario?: Usuario;
  token?: string;
  setUsuario: (value: Usuario | undefined) => void;
  setToken: (value: string | undefined) => void;
  loading: boolean;
  user: User | null;
  Login: (email: string, senha: string) => Promise<void>;
  Logout: () => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const [usuario, setUsuario] = useState<Usuario | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  const auth = getAuth(Firebase);
  const navigate = useNavigate();

  async function Login(email: string, senha: string) {
    setLoading(true); // Ativa o loading ao iniciar login
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      setUser({
        displayName: user.displayName ?? "",
        email: user.email ?? "",
        photoURL: user.photoURL ?? "",
        uid: user.uid,
      });
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
    } finally {
      setLoading(false); // Finaliza o loading após tentativa de login
    }
  }

  async function Logout() {
    setLoading(true); // Ativa o loading ao iniciar logout
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    } finally {
      setLoading(false); // Finaliza o loading após logout
    }
  }

  useEffect(() => {
    setLoading(true); // Ativa o loading ao verificar autenticação
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          displayName: user.displayName ?? "",
          email: user.email ?? "",
          photoURL: user.photoURL ?? "",
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
      setLoading(false); // Finaliza o loading após verificação
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        setUsuario,
        setToken,
        loading,
        user,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
