

const estados = [
    { uf: 'AC', nome: 'Acre' },
    { uf: 'AL', nome: 'Alagoas' },
    { uf: 'AP', nome: 'Amapá' },
    { uf: 'AM', nome: 'Amazonas' },
    { uf: 'BA', nome: 'Bahia' },
    { uf: 'CE', nome: 'Ceará' },
    { uf: 'DF', nome: 'Distrito Federal' },
    { uf: 'ES', nome: 'Espírito Santo' },
    { uf: 'GO', nome: 'Goiás' },
    { uf: 'MA', nome: 'Maranhão' },
    { uf: 'MT', nome: 'Mato Grosso' },
    { uf: 'MS', nome: 'Mato Grosso do Sul' },
    { uf: 'MG', nome: 'Minas Gerais' },
    { uf: 'PA', nome: 'Pará' },
    { uf: 'PB', nome: 'Paraíba' },
    { uf: 'PR', nome: 'Paraná' },
    { uf: 'PE', nome: 'Pernambuco' },
    { uf: 'PI', nome: 'Piauí' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    { uf: 'RN', nome: 'Rio Grande do Norte' },
    { uf: 'RS', nome: 'Rio Grande do Sul' },
    { uf: 'RO', nome: 'Rondônia' },
    { uf: 'RR', nome: 'Roraima' },
    { uf: 'SC', nome: 'Santa Catarina' },
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'SE', nome: 'Sergipe' },
    { uf: 'TO', nome: 'Tocantins' }
  ];
  
  // Exemplo de como gerar o elemento <select> usando JavaScript puro:
  function gerarSelectEstados(idSelect) {
    const select = document.getElementById(idSelect);
  
    estados.forEach(estado => {
      const option = document.createElement('option');
      option.value = estado.uf;
      option.textContent = estado.nome;
      select.appendChild(option);
    });
  }
  
  // Chame a função passando o ID do elemento <select>
  gerarSelectEstados('estado');


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

  

function validarEmail(email, idCampo) {
  const mensagemErro = document.getElementById(`error_${idCampo}`);
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regexEmail.test(email)) {
    mensagemErro.textContent = '';
    return true;  
  } else {
    mensagemErro.textContent = 'E-mail inválido!';
    return false;
  }
}


function formatarTelefone(campo) {
  let telefone = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  telefone = telefone.replace(/^(\d{2})(\d)/g, '($1)$2'); // Coloca parênteses em volta dos dois primeiros dígitos
  telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2'); // Coloca hífen entre o quarto e quinto dígitos
  campo.value = telefone;
}


function validarTelefone() {
  const telefone = document.getElementById('telefone').value.replace(/\D/g, ''); // Remove caracteres não numéricos
  const mensagemErro = document.getElementById('error_telefone');

  if (telefone.length !== 11) {
    mensagemErro.textContent = 'Telefone inválido.';
    return false;
  }else{
    mensagemErro.textContent = ''; // Limpa a mensagem de erro
    return true; // Telefone válido
  }


}

function formatarNumero(campo) {
  let numero = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  campo.value = numero;
}

function formatarCEP(campo) {
  let cep = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
  cep = cep.replace(/(\d{5})(\d{3})/, '$1-$2'); // Adiciona o hífen
  campo.value = cep;
}



function validarCEP() {
  const cep = document.getElementById('cep').value.replace(/\D/g, ''); // Remove caracteres não numéricos
  const mensagemErro = document.getElementById('error_cep');

  if (cep.length !== 8) {
    mensagemErro.textContent = 'CEP inválido.';
    return false;
  }else{
    mensagemErro.textContent = ''; // Limpa a mensagem de erro
    return true; // CEP válido
  }

}


function validarTermos() {
  const termosCheckbox = document.getElementById('termos');
  const erroTermos = document.getElementById('error_termos');

  if (!termosCheckbox.checked) {
    erroTermos.textContent = 'Você precisa aceitar os termos e condições.';
    return false; // Impede o envio do formulário
  } else {
    erroTermos.textContent = ''; // Limpa a mensagem de erro
    return true;
  }
}


const fileInput = document.getElementById('arquivoRg');
const fileNameDisplay = document.getElementById('file-nameRg');

fileInput.addEventListener('change', function() {
  if (this.files && this.files.length > 0) {
    fileNameDisplay.textContent = this.files[0].name;
  } else {
    fileNameDisplay.textContent = 'Nenhum arquivo selecionado';
  }
});


const fileInput2 = document.getElementById('arquivoComprovaEnd');
const fileNameDisplay2 = document.getElementById('file-nameEndereco');

fileInput2.addEventListener('change', function() {
  if (this.files && this.files.length > 0) {
    fileNameDisplay2.textContent = this.files[0].name;
  } else {
    fileNameDisplay2.textContent = 'Nenhum arquivo selecionado';
  }
});