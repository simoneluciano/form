const limparFormulario = (endereco) => {
    document.getElementById("endereco").value = ''; 
    document.getElementById("bairro").value =  '';
    document.getElementById("cidade").value = '';
    document.getElementById("estado").value = '';
};

const preencherFormulario = (endereco) => {

    document.getElementById("endereco").value = endereco.logradouro; 
    document.getElementById("bairro").value = endereco.bairro ;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
};
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const buscarCEP = async () => {
    limparFormulario();
    const cep = document.getElementById("cep").value
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
      const dados = await fetch(url);
      const endereco = await dados.json();
      if (endereco.hasOwnProperty("erro")){
        document.getElementById("endereco").value = "Cep não encontrado!"

      } else {
        preencherFormulario(endereco)
      }
    } else {
        document.getElementById("endereco").value = "Cep incorreto!"

    }
}
document.getElementById("cep")
        .addEventListener("focusout",buscarCEP)


///Senha 
document.getElementById('senha').addEventListener('input', function () {
  const senha = this.value;

  // Verifica se a senha atende a todos os critérios
  const temMaiuscula = /[A-Z]/.test(senha);
  const temMinuscula = /[a-z]/.test(senha);
  const temNumero = /\d/.test(senha);
  const temCaracteres = /[\W_]/.test(senha);
  const tamanhoMinimo = senha.length >= 12;

  // Atualiza a borda do input conforme a senha atende a todos os critérios
  if (temMaiuscula && temMinuscula && temNumero && temCaracteres && tamanhoMinimo) {
      this.style.borderColor = "green";
  } else {
      this.style.borderColor = "red";
  }

  // Atualiza a lista de validação
  document.getElementById("maiuscula").innerHTML = temMaiuscula ? "🟢 Letras maiúsculas" : "🔴 Letras maiúsculas";
  document.getElementById("minuscula").innerHTML = temMinuscula ? "🟢 Letras minúsculas" : "🔴 Letras minúsculas";
  document.getElementById("numeros").innerHTML = temNumero ? "🟢 Números" : "🔴 Números";
  document.getElementById("caracteres").innerHTML = temCaracteres ? "🟢 Caracteres especiais" : "🔴 Caracteres especiais";
});

////envio 

document.getElementById("cadastroForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const formData = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("email").value,
      senha: document.getElementById("senha").value,
      cep:document.getElementById("cep").value,
      endereco:document.getElementById("endereco").value,
      bairro:document.getElementById("bairro").value,
      cidade:document.getElementById("cidade").value,
      estado:document.getElementById("estado").value

  };

  const response = await fetch("http://localhost:3000/criar-conta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
  });

  const result = await response.json();
  alert(result.message);
});