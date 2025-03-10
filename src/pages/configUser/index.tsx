import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AuthContext } from "../../components/data/context/authContext";

// https://www.figma.com/design/94HFbu4ZKVzAxu1KJCFKfr/Registration-flow-(Community)?node-id=434-304&p=f&t=IwXUYXWcuBRTfZei-0

export default function ConfigUser() {
  const { user } = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [tipoLogradouro, setTipoLogradouro] = useState<string>("");
  const [logradouro, setLogradouro] = useState<string>("");
  const [numero, setNumero] = useState<string>("");
  const [bairro, setBairro] = useState<string>("");
  const [cep, setCep] = useState<string>("");
  const [cidade, setCidade] = useState<string>("");
  const [estado, setEstado] = useState<string>("");

  function formatPhoneNumber(phone: string): string {
    // Remove todos os caracteres não numéricos
    const cleaned = phone.replace(/\D/g, "");

    // Verifica se o número tem 10 ou 11 dígitos
    if (cleaned.length === 10) {
      // Formato (XX) XXXX-XXXX
      return cleaned.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else if (cleaned.length === 11) {
      // Formato (XX) 9XXXX-XXXX
      return cleaned.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2$3-$4");
    } else {
      // Retorna sem formatação se não for válido
      return phone;
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNumber(rawValue);
    setPhone(formattedValue); // 🔥 Atualiza o estado já formatado
  }

  return (
    <div>
      {/* Clínica Escola Integrada */}
      <div className="flex justify-between mx-12 mt-16">
        <h1>Meus Dados</h1>
        <button className="bg-slate-700 px-1 hover:bg-slate-800 transition-all">
          <FaPlus />
        </button>
      </div>

      <div className="mx-[10%] mt-24">
        <div className="flex justify-center gap-8">
          <TextField
            label="Nome"
            type="name"
            variant="standard"
            sx={{ width: "15rem" }}
            size="small"
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            disabled
            variant="standard"
            defaultValue={user?.email}
            sx={{ width: "15rem" }}
            size="small"
          />
        </div>
        <div>
          <TextField
            label="Contato"
            type="phone"
            variant="standard"
            sx={{ width: "15rem" }}
            size="small"
            value={phone}
            onChange={handleChange}
          />
          <button>
            <FaPlus />
          </button>
        </div>

        <div className="flex justify-center gap-2 ">
          <button className="bg-slate-500 px-4 hover:bg-slate-400">
            Cancelar
          </button>
          <button className="bg-slate-600 px-4 hover:bg-slate-500">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}

export type Endereco = {
  id: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  pais: string;
  createdAt: string;
  updatedAt: string;
};
