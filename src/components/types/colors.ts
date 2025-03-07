const colors = {
  primary: "#007BFF", // Azul principal
  primaryDark: "#0056b3", // Azul mais escuro para hover e destaque
  secondary: "#6C757D", // Cinza para elementos secundários
  accent: "#6610f2", // Roxo para pequenos destaques
  success: "#28A745", // Verde para sucesso
  danger: "#DC3545", // Vermelho para erros
  warning: "#FFC107", // Amarelo para avisos
  info: "#17A2B8", // Azul claro para informações

  text: {
    primary: "#212529", // Preto suave para títulos
    secondary: "#495057", // Cinza escuro para parágrafos e textos secundários
    muted: "#868E96", // Cinza claro para legendas
    contrast: "#FFFFFF", // Texto branco para botões e destaques
  },

  background: {
    default: "#F8F9FA", // Fundo geral (dashboard, páginas, etc.)
    paper: "#FFFFFF", // Cartões, modais, áreas em destaque
    sidebar: "#343A40", // Lateral do dashboard
    login: "#E9ECEF", // Fundo da tela de login
  },

  button: {
    primary: "#007BFF", // Azul principal para botões
    primaryHover: "#0056b3", // Azul mais escuro no hover
    secondary: "#6C757D", // Cinza para botões secundários
    danger: "#DC3545", // Vermelho para botões de ação perigosa
    success: "#28A745", // Verde para confirmações
    disabled: "#ADB5BD", // Cinza para botões desabilitados
  },

  border: {
    default: "#CED4DA", // Bordas suaves
    input: "#DEE2E6", // Bordas de inputs
  },

  shadow: {
    light: "0px 2px 4px rgba(0, 0, 0, 0.1)", // Sombra suave
    medium: "0px 4px 6px rgba(0, 0, 0, 0.15)", // Sombra média
    dark: "0px 6px 8px rgba(0, 0, 0, 0.2)", // Sombra forte
  },

  chart: {
    line: "#17A2B8", // Azul para gráficos de linha
    bar: "#007BFF", // Azul para gráficos de barra
    pie: ["#007BFF", "#6610f2", "#28A745", "#FFC107", "#DC3545"], // Cores variadas para gráfico de pizza
  },
};

export default colors;
