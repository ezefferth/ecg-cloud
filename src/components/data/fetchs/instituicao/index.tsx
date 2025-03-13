import axios from "axios";
import { Instituicao } from "../../../types/types";

type Props = {
  setInstituicoes: (value: Instituicao[]) => void;
};

export async function LerInstituicoes({ setInstituicoes }: Props) {
  try {
    const response = await axios.get<Instituicao[]>("/instituicoes/ler", {
      headers: { "Content-Type": "application/json" },
    });
    console.log("Sucesso em ler instituições");

    setInstituicoes(response.data);
  } catch (error) {
    console.error("Erro ao ler instituições:", error);
  }
}
