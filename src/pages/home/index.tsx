import { useContext, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../../components/data/context/authContext";

import {
  FaAngleDown,
  FaAngleUp,
  FaChartLine,
  FaUser,
  FaUsers,
} from "react-icons/fa6";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

import { IoSettingsOutline } from "react-icons/io5";


// import axios from 'axios'
export default function Home() {
  const [loc, setLoc] = useState<string>("");

  const {Logout} = useContext(AuthContext)

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoc(location.pathname);
  }, [location]);

  const [configExpanded, setConfigExpanded] = useState<boolean>(false);

  const toggleConfig = () => {
    setConfigExpanded(!configExpanded);
  };

  return (
    <div className="flex bg-slate-100 h-screen w-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-600 shadow-lg p-5 flex flex-col h-screen overflow-y-auto">
        {/* Imagem e Título do Usuário */}
        <div className="space-x-3 mb-6 mt-20">
          <div className="text-slate-50 text-center">
            <h1 className="font-semibold text-2xl ">ECG Cloud</h1>
          </div>
        </div>
        <div className="text-slate-100 mt-20">
          <div
            className={`flex pb-2 items-center gap-2 hover:pl-2 transition-all hover:font-bold ${
              loc == "/dashboard" && "pl-2 font-bold"
            }`}
          >
            <FaChartLine className="w-6 h-6 mr-2" />
            <p
              className="cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </p>
          </div>
          <div
            className={`flex pb-2 items-center gap-2 hover:pl-2 transition-all hover:font-bold ${
              loc == "/pacientes" && "pl-2 font-bold"
            }`}
          >
            <MonitorHeartIcon className="w-6 h-6 mr-2" />
            <p
              className="cursor-pointer "
              onClick={() => navigate("/pacientes")}
            >
              Pacientes
            </p>
          </div>
          <div className="pb-2">
            <div
              className={`flex items-center transition-all cursor-pointer ${
                configExpanded
                  ? "pl-2 font-semibold"
                  : "hover:pl-2 hover:font-bold"
              }`}
              onClick={toggleConfig}
            >
              <IoSettingsOutline className="w-6 h-6 mr-2" />
              <p className="ml-2">Configurando</p>
              <span className="ml-auto">
                {configExpanded ? <FaAngleUp /> : <FaAngleDown />}
              </span>
            </div>

            {/* Opções do Menu Configurações */}
            {configExpanded && (
              <div className="pl-12 mt-2 space-y-2">
                <div
                  className={`flex items-center gap-2 hover:pl-2 transition-all ${
                    loc == "/config/pacientes" && "pl-2 font-bold"
                  }`}
                >
                  <FaUsers  className="h-5 w-5" />
                  <p
                    className="cursor-pointer"
                    onClick={() => navigate("/config/pacientes")}
                  >
                    Pacientes
                  </p>
                </div>
                <div
                  className={`flex items-center gap-2 hover:pl-2 transition-all ${
                    loc == "/config/usuario" && "pl-2 font-bold"
                  }`}
                >
                  <FaUser  className="h-5 w-5" />
                  <p
                    className="cursor-pointer"
                    onClick={() => navigate("/config/usuario")}
                  >
                    Meus Dados
                  </p>
                </div>

                
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mt-auto w-full">
          <button
            onClick={Logout}
            className="text-slate-100 hover:text-white px-3 rounded-lg transition-all hover:outline hover:transition-all"
          >
            Sair
          </button>
        </div>
      </aside>
      <div className="flex-grow h-full w- overflow-hidden">
        <div className="h-full overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
