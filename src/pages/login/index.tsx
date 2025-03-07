import colors from "../../components/types/colors";
import TextField from "@mui/material/TextField";
import imgLogin from "../../../src/assets/login.png";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      {/* Seção do Login */}
      <div className="w-[60vw] flex rounded-4xl shadow-2xl">
        <div
          style={{
            backgroundColor: colors.background.login,
            color: colors.text.primary,
          }}
          className="w-1/2 justify-center items-center p-8 rounded-l-4xl border-1 border-gray-300"
        >
          <p className="text-center text-2xl font-semibold text-gray-700">
            ECGCloud
          </p>
          <p className="text-center text-lg mt-4 text-gray-500">
            Bem vindo ao sistema ECGCloud,
            <br /> realize o login para proceguir
          </p>

          <div className="flex justify-center mx-12 mt-20 text-slate-700">
            <div className="w-full">
              <TextField
                id="email"
                label="E-mail"
                variant="standard"
                type="email"
                fullWidth
              />
              <div className="mt-4">
                <TextField
                  id="password"
                  label="Senha"
                  variant="standard"
                  type="password"
                  fullWidth
                />
              </div>
            </div>
          </div>
          <div className="mt-4 mx-12">
            <button
              className="px-4 py-1 w-full transition-all"
              onClick={() => navigate("/")}
            >
              Entrar
            </button>
          </div>
          <div className="mx-12 mt-4">
            <p>
              Esqueceu a senha? <a className="cursor-pointer">Recuperar senha.</a>
            </p>
          </div>
        </div>

        {/* Seção da Imagem */}
        <div className="w-1/2 flex justify-center items-center bg-gray-100 rounded-r-4xl">
          <img
            src={imgLogin}
            className="w-full h-full object-cover rounded-r-4xl"
            alt="Login"
          />
        </div>
      </div>
    </div>
  );
}
