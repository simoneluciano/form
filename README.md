# 👤 Cadastro de Usuários com Validação e Integração via API

Aplicação fullstack para cadastro de usuários com validação de senha forte, preenchimento automático de endereço via CEP e integração com backend em Node.js.

## ✨ Funcionalidades

- 📄 Formulário de cadastro com campos para dados pessoais, endereço e senha
- 🔒 Validação de senha em tempo real:
  - Mínimo 12 caracteres
  - Letras maiúsculas e minúsculas
  - Números
  - Caracteres especiais
- 📦 Consulta automática de endereço usando a API [ViaCEP](https://viacep.com.br)
- 🔁 Envio dos dados para backend via Fetch API (formato JSON)
- 📥 Simulação de armazenamento com servidor local (Node.js + Express)

## 🛠️ Tecnologias Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript ES6+
- Fetch API
- API ViaCEP

### Backend
- Node.js
- Express
- Body-Parser
- CORS

## 📂 Estrutura

- `index.html` – estrutura do formulário
- `style.css` – estilos da interface
- `formulario.js` – validações, chamadas à API e envio de dados
- `server.js` – backend em Node.js que recebe os dados do formulário

## 🧠 Aprendizados

- Manipulação de DOM e eventos no JavaScript
- Consumo de APIs públicas com `fetch()`
- Validação de formulários com expressividade visual
- Comunicação entre frontend e backend
- Simulação de persistência de dados






