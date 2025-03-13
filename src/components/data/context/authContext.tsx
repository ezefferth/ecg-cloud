import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Usuario } from "../../types/types";

import { useNavigate } from "react-router-dom";

interface UsuarioResponse {
  usuario: Usuario;
  token?: string;
}

type AuthContextType = {
  usuario?: Usuario;
  token?: string;
  setUsuario: (value: Usuario | undefined) => void;
  setToken: (value: string | undefined) => void;
  loading: boolean;
  Logout: () => void;
  Login: (nomeUsuario: string, senha: string) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: any) {
  const [usuario, setUsuario] = useState<Usuario | undefined>();
  const [token, setToken] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  // const [user, setUser] = useState<User | null>(null);

  // const auth = getAuth(Firebase);
  const navigate = useNavigate();

  axios.defaults.baseURL = "http://localhost:3000";

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  const Login = async (nomeUsuario: string, senha: string) => {
    try {
      const response = await axios.post<UsuarioResponse>(
        "http://localhost:3000/usuario/login",
        {
          nomeUsuario,
          senha,
        }
      );
      if (response.status < 200 || response.status >= 300) {
        throw new Error("Erro de login");
      }
      const { usuario, token } = response.data;
      // 🔹 Salvar o token no LocalStorage
      if (token) {
        localStorage.setItem("authToken", token);
      }
      setUsuario(usuario);
      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  };

  const Logout = async () => {
    try {
      // Faz uma requisição ao backend para limpar a sessão, se necessário
      await axios.post("/usuario/logout", {}, { withCredentials: true });

      // 🔹 Removendo o token do LocalStorage
      localStorage.removeItem("authToken");

      setUsuario(undefined);
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  useEffect(() => {
    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers = config.headers || {}; // Garante que headers está definido
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    const verificarLogin = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        console.warn("Nenhum token encontrado, redirecionando para login.");
        setLoading(false);
        navigate("/login");
        return;
      }

      try {
        const response = await axiosInstance.get<UsuarioResponse>(
          "/usuario/verificaLogin",
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          setUsuario(data.usuario);
        }
      } catch (error) {
        console.error("Usuário não autenticado:", error);
        localStorage.removeItem("authToken"); // Remove token inválido
        setUsuario(undefined);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    verificarLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        setUsuario,
        setToken,
        loading,
        // user,
        Login,
        Logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
