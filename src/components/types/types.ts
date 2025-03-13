export type Instituicao = {
  id: string;
  nome: string;
  responsavel: string;
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

// export type Endereco = {
//   id: string;
//   tipoLogradouro: string;
//   logradouro: string;
//   numero: string;
//   bairro: string;
//   cep: string;
//   cidade: string;
//   estado: string;
//   pais: string;
//   createdAt: string;
//   updatedAt: string;
// };

// (067) 3345-7967 /  Cidade Universitária, Caixa Postal 549. CEP 79070-900. Campo Grande - MS

export type Usuario = {
  id: string;
  nome: string;
  sobreNome: string;
  senha: string;
  email: string;
  contato: string[];
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  pais: string;
  instituicaoId: string;
  admin: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Paciente = {
  id: string;
  nome: string;
  email: string;
  contato: string[];
  dataNascimento: string;
  genero: string;
  historicoMedico?: string;
  observacoes?: string;
  instituicaoId: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  pais: string;
  ecg: Ecg[];
  createdAt: string;
  updatedAt: string;
};

export type Ecg = {
  id: string;
  pacienteId: string;
  idDispositivo: string;
  paciente: Paciente;
  sinalECG: string;
  freqAmostragem: string;
  ritmoCardiaco: string;
  createdAt: string;
};
