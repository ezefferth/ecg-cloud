import { Usuario } from "../../components/types/types";
import axios from "axios";

interface UsuarioResponse {
  usuario: Usuario;
  token?: string;
}


export default function Pacientes() {

  axios.defaults.baseURL = "http://localhost:3000";

  const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
  });

  const verificarLogin = async () => {
    axiosInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        config.headers = config.headers || {}; // Garante que headers está definido
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });


    const token = localStorage.getItem("authToken");

    if (!token) {
      console.warn("Nenhum token encontrado, redirecionando para login.");
      // setLoading(false);
      // navigate("/login");
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
        console.log(data)
      }
    } catch (error) {
      console.error("Usuário não autenticado:", error);
      localStorage.removeItem("authToken"); // Remove token inválido

    } finally {
      
    }
  };
  return (
    <div><button onClick={verificarLogin}>teste</button></div>
  )
}
