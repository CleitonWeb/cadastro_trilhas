

const formLogin = document.getElementById('formLogin');


formLogin.onsubmit = function(){

  if (validarCPF()){
      let mensagemErro = document.getElementById(`error_password`);
      let campoSenha = document.getElementById(`inputPassword`);
      let campoCpf = document.getElementById(`cpf`).value.replace(/\D/g, '');

      if(campoSenha.value === ''){
          mensagemErro.textContent = 'O preenchimento da senha é obrigatório!';
          return false
      }

      mensagemErro = document.getElementById(`error_credenciais`);
      if(localStorage.length === 0){
        mensagemErro.textContent = 'CPF não cadastrado!';
        return false;
      }else{
        
        if(campoCpf === localStorage.getItem('cpf').replace(/\D/g, '') && campoSenha.value === localStorage.getItem('senha')){
            return true;
        }else{
            mensagemErro.textContent = 'CPF ou Senha errada ou usuário não cadastrado!';
            return false
        }
      }

      }else{        
        return false;
      }

}



function formatarCPF(campo) {
    let cpf = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    cpf = cpf.replace(/(\d{3})(\d{2})$/, '$1-$2');
    campo.value = cpf;
  }


function validarCPF() {
    const cpf = document.getElementById('cpf').value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const mensagemErro = document.getElementById(`error_cpf`);
  
    if (cpf.length !== 11) {
      mensagemErro.textContent = 'CPF inválido.';
      return false;
    }
  
    if (/^(\d)\1+$/.test(cpf)) {
      mensagemErro.textContent = 'CPF inválido.';
      return false;
    }
  
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    const digito1 = resto >= 10 ? 0 : resto;
  
    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    const digito2 = resto >= 10 ? 0 : resto;
  
    if (parseInt(cpf.charAt(9)) === digito1 && parseInt(cpf.charAt(10)) === digito2) {
      mensagemErro.textContent = ''; // Limpa a mensagem de erro
      return true; // CPF válido
    } else {
      mensagemErro.textContent = 'CPF inválido.';
      return false; // CPF inválido
    }
  }
  