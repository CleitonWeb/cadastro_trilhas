const arrDados = document.querySelectorAll('.dados');


function submeteForm(){
  if(validarCampo()) certificaDados();
}



function validarCampo() {
  const msgErro = `Campo de preenchimento obrigatório!`;
  let retorno;

    for (let i = 0; i < arrDados.length; i++){
      let idCampo = arrDados[i].id;
      let valorCampo = arrDados[i].value.trim();
      let spanErro  = document.getElementById(`error_${idCampo}`);

        if(valorCampo === ''){
          spanErro.innerHTML = msgErro;
          window.scrollTo(0, 0);
          retorno = false;
        }else{
          if(idCampo === 'email'){
            retorno = validarEmail(valorCampo, idCampo);
          }else if(idCampo === 'cpf'){
            retorno = validarCPF();
          }else if(idCampo === 'telefone'){
            retorno = validarTelefone();
          }else if(idCampo === 'cep'){
            retorno = validarCEP();
          }else if(idCampo === 'senha'){
            retorno = validarSenhas();
          }else{
            spanErro.innerHTML = '';
            retorno = true;
          }
        }
    }

    //retorno = validarSenhas();

    // Verificado se todos campos estão preenchidos, verifica se os termos foram aceitos.
    if(retorno){      
      return validarTermos();
    }else{
      return false;
    }
  }


  const campos = document.querySelectorAll('input[type="text"]');

  campos.forEach(campo => {
    campo.addEventListener('keydown', () => {      
      document.getElementById(`error_${campo.id}`).innerHTML = '';
    });
  });

  
// Obtém os elementos
const modal = document.getElementById("modal");
const botaoFechar = document.querySelector(".fechar");
const botaoCancelar = document.getElementById('btnCancelar');


// Abre a tela suspensa com os dados preenchidos (div modal)
function certificaDados() {
  modal.style.display = "block";

  let stringHtml = '';
  
  for (let i = 0; i < arrDados.length; i++){
    let idCampo = arrDados[i].id;
    let valorCampo = arrDados[i].value;
    let nomeCampo = idCampo.charAt(0).toUpperCase() + idCampo.slice(1); 
    
    if (idCampo === 'dtNasc'){
      const data = new Date(valorCampo);
      valorCampo = data.toLocaleDateString();      
      stringHtml += `<span>Data de Nascimento: </span><strong><span>${valorCampo}</span></strong></p>`;   
    }else if(idCampo === 'numero'){
      stringHtml += `<span>Número: </span><strong><span>${valorCampo}</span></strong></p>`;
    }else{
      stringHtml += `<span>${nomeCampo}: </span><strong><span>${valorCampo}</span></strong></p>`;    
    }    
  }
  
  document.getElementById("dados_preenchidos").innerHTML = stringHtml;
  window.scrollTo(0, 0);
}


// Fecha o modal quando o botão de fechar é clicado
botaoFechar.onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal quando o botão de fechar é clicado
botaoCancelar.onclick = function() {
    modal.style.display = "none";
}



function carregaDados(){  
  localStorage.clear();

  for (let i = 0; i < arrDados.length; i++){
    let idCampo = arrDados[i].id;
    let valorCampo = arrDados[i].value;

    if(valorCampo){
      localStorage.setItem(idCampo, valorCampo);
    }    
  }

  if(localStorage.length > 0){
    alert('Inscrição efetuada com sucesso!');
    window.location = "index.html";
  }  
}


const trilhas = document.querySelectorAll('.trilha-opcao');

trilhas.forEach(trilha => {
  trilha.addEventListener('click', () => {
    // Remove a classe 'selecionada' de todas as trilhas
    trilhas.forEach(t => t.classList.remove('selecionada'));
    // Adiciona a classe 'selecionada' à trilha clicada
    trilha.classList.add('selecionada');
  });
});



//Volta para a tela de login
document.getElementById("btnCancelarCadastro").onclick = function() {
  window.location="index.html";
}