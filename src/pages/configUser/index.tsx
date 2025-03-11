import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { AuthContext } from "../../components/data/context/authContext";
import { estados } from "../../components/cidadesPorEstado";

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
  const [cidades, setCidades] = useState<string[]>([]);

  function formatCepNumber(cep: string): string {
    // Remove todos os caracteres não numéricos
    const cleaned = cep.replace(/\D/g, "");

    // Verifica se o CEP tem 8 dígitos
    if (cleaned.length === 8) {
      // Formato XXXXX-XXX
      return cleaned.replace(/(\d{5})(\d{3})/, "$1-$2");
    } else {
      // Retorna sem formatação se não for válido
      return cep;
    }
  }

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
  function handleChangeFormatedCep(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const formattedValue = formatCepNumber(rawValue);
    setCep(formattedValue); // 🔥 Atualiza o estado já formatado
  }

  function handleChangeFormated(e: React.ChangeEvent<HTMLInputElement>) {
    const rawValue = e.target.value;
    const formattedValue = formatPhoneNumber(rawValue);
    setPhone(formattedValue); // 🔥 Atualiza o estado já formatado
  }

  const handleChangedTipoLogradouro = (event: SelectChangeEvent) => {
    setTipoLogradouro(event.target.value);
  };

  const handleEstadoChange = (event: SelectChangeEvent) => {
    setEstado(event.target.value);
  };

  const handleCidadeChange = (event: SelectChangeEvent) => {
    setCidade(event.target.value);
  };

  useEffect(() => {
    if (estado) {
      const cidadesDoEstado =
        estados.find((e) => e.sigla === estado)?.cidades || [];
      setCidades(cidadesDoEstado);
    } else {
      setCidades([]);
    }
    setCidade(""); // Resetar cidade ao mudar de estado
  }, [estado]);

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
            value={nome}
            variant="standard"
            sx={{ width: "15rem" }}
            size="small"
            onChange={(e) => setNome(e.target.value)}
          />
          <TextField
            label="Email"
            type="email"
            disabled
            value={user?.email}
            variant="standard"
            defaultValue={user?.email}
            sx={{ width: "15rem" }}
            size="small"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <TextField
            label="Contato"
            type="phone"
            variant="standard"
            sx={{ width: "15rem" }}
            size="small"
            value={phone}
            onChange={handleChangeFormated}
          />
          <FormControl
            variant="standard"
            sx={{ width: "15rem" }}
          >
            <InputLabel id="demo-simple-select-standard-label">
              Tipo de Logradouro
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={tipoLogradouro}
              onChange={handleChangedTipoLogradouro}
              label="Tipo Logradouro"
              size="small"
            >
              <MenuItem value="Av.">Av.</MenuItem>
              <MenuItem value="Rua">Rua</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <TextField
            label="Logradouro"
            type="text"
            // disabled
            variant="standard"
            // defaultValue={user?.email}
            sx={{ width: "15rem" }}
            size="small"
            value={logradouro}
            onChange={(e) => setLogradouro(e.target.value)}
          />
          <TextField
            label="Número"
            type="number"
            variant="standard"
            sx={{ width: "15rem" }}
            size="small"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </div>
        <div className="flex justify-center gap-8 mt-4">
          <TextField
            label="Bairro"
            type="text"
            // disabled
            variant="standard"
            // defaultValue={user?.email}
            sx={{ width: "15rem" }}
            size="small"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}
          />
          <TextField
            label="Cep"
            type="text"
            // disabled
            variant="standard"
            // defaultValue={user?.email}
            sx={{ width: "15rem" }}
            size="small"
            value={cep}
            onChange={handleChangeFormatedCep}
          />
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <FormControl
            variant="standard"
            sx={{ width: "15rem" }}
          >
            <InputLabel id="estado-select-label">Estado</InputLabel>
            <Select
              labelId="estado-select-label"
              id="estado-select"
              value={estado}
              onChange={handleEstadoChange}
              label="Estado"
              size="small"
            >
              <MenuItem value="">
                <em>Selecione um estado</em>
              </MenuItem>
              {estados.map((estado) => (
                <MenuItem
                  key={estado.sigla}
                  value={estado.sigla}
                >
                  {estado.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl
            variant="standard"
            sx={{ width: "15rem" }}
            disabled={!estado}
          >
            <InputLabel id="cidade-select-label">Cidade</InputLabel>
            <Select
              labelId="cidade-select-label"
              id="cidade-select"
              value={cidade}
              onChange={handleCidadeChange}
              label="Cidade"
              disabled={!estado}
              size="small"
            >
              <MenuItem value="">
                <em>Selecione uma cidade</em>
              </MenuItem>
              {cidades.map((c) => (
                <MenuItem
                  key={c}
                  value={c}
                >
                  {c}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
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
