// VALIDAÇÃO CAMPO NOME //
var inputNome = document.querySelector("#nome");
nome.addEventListener("keypress", function(e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);
  
  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

// Resultados complete
const dados = ["CARTO", "DDCT", "DESC", "DESMA", "DETEL", "DIREÇÃO", "ELE", "ESTR", "MECAN", "PEAMB", "PGECIV", "SECFEN", "SIDES", "PROTOCOLO"];

const input = document.getElementById("meuInput");
const lista = document.getElementById("listaSugestoes");

input.addEventListener("input", function() {
  const valorDigitado = this.value.toLowerCase();
  lista.innerHTML = ""; // Limpa a lista anterior

  // Se o usuário não digitou nada, encerra
  if (!valorDigitado) return;

  // Filtra os dados que começam com o texto digitado
  const sugestoes = dados.filter(item => 
    item.toLowerCase().startsWith(valorDigitado)
  );

  // Cria os elementos <li> e adiciona na lista
  sugestoes.forEach(item => {
    const itemLista = document.createElement("li");
    itemLista.textContent = item;
    
    // Permite que o usuário clique na sugestão
    itemLista.addEventListener("click", function() {
      input.value = item;
      lista.innerHTML = ""; // Limpa as sugestões após a seleção
    });

    lista.appendChild(itemLista);
  });
});



// VALIDAÇÃO CAMPO TELEFONE //
const handlePhone = (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  }

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

function enviarFormulario() {

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let telefone = document.getElementById('telefone').value;
  let departamento = document.getElementById('departamento').value;
  let mensagem = document.getElementById('mensagem').value;
  
  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(departamento);
  console.log(mensagem);

}
