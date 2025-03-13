import { createContext, useContext, useEffect, useState } from "react";

import { Instituicao } from "../../types/types";
import { AuthContext } from "./authContext";
import { LerInstituicoes } from "../fetchs/instituicao";

type DataContextType = {
  instituicoes: Instituicao[] | undefined;
  setInstituicoes: (value: Instituicao[] | undefined) => void;
};

export const DataContext = createContext({} as DataContextType);

export default function DataProvider({ children }: any) {
  const [instituicoes, setInstituicoes] = useState<Instituicao[] | undefined>();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (!usuario) return;


    const fetchInitialData = async () => {
      try {
        // Buscando os dados iniciais (sugestões, categorias, setores, etc.)
        await Promise.all([
          LerInstituicoes({ setInstituicoes }),
        ]);
      } catch (error) {
        console.error("Erro na carga inicial:", error);
      }
    };

    fetchInitialData();
  }, [usuario]);

  return (
    <DataContext.Provider
      value={{
        instituicoes,
        setInstituicoes,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
