import estadosCidades from './estados-cidades.json';

interface Estado {
  nome: string;
  sigla: string;
  cidades: string[];
}

export const estados: Estado[] = estadosCidades.estados;

