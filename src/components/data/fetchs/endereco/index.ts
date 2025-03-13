// import axios from "axios";
// import { Endereco } from "../../../types/types";

// type Props = {
//   setEndereco: (value: Endereco) => void;
//   id: string;
// };

// export async function LerEndereco({ setEndereco, id }: Props) {
//   try {
//     const response = await axios.post<Endereco>(
//       "/endereco/ler",
//       { id },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     console.log("Sucesso em ler endereço do usuário", response.data);

//     setEndereco(response.data);
//   } catch (error) {
//     console.error("Erro ao ler endereço do usuário:", error);
//   }
// }
// type PropsCriar = {
//   setEndereco: (value: Endereco) => void;
//   tipoLogradouro: string;
//   logradouro: string;
//   numero: string;
//   bairro: string;
//   cep: string;
//   cidade: string;
//   estado: string;
//   tipo: string;
//   fkId: string;
// };
// export async function CriarEndereco({
//   setEndereco,
//   fkId,
//   tipoLogradouro,
//   logradouro,
//   numero,
//   bairro,
//   cep,
//   cidade,
//   estado,
//   tipo,
// }: PropsCriar) {
//   try {
//     const response = await axios.post<Endereco>(
//       "/endereco/criar",
//       {
//         fkId,
//         tipoLogradouro,
//         logradouro,
//         numero,
//         bairro,
//         cep,
//         cidade,
//         estado,
//         tipo,
//       },
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//     console.log("Sucesso em cadastrar endereço do usuário");

//     setEndereco(response.data);
//   } catch (error) {
//     console.error("Erro ao cadastrar endereço do usuário:", error);
//   }
// }
