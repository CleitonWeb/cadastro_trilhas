const arrDados = localStorage;


const linkTrilhaEscolha = document.getElementById('link_trilha_escolhida');
const linkDadosPessoais = document.getElementById('link_dados_pessoais');
const linkSenha = document.getElementById('link_senha');

const modalTrilhaEscolhida = document.getElementById('modal_trilha_escolhida');
const modalDadosPessoais = document.getElementById('modal_dados_pessoais');
const modalSenha = document.getElementById('modal_senha');



linkTrilhaEscolha.onclick = function() {
    modalTrilhaEscolhida.style.display = "block";
    modalDadosPessoais.style.display = "none";
    modalSenha.style.display = "none";
        
    let stringHtml = 
            `<span></span><strong><span>Programação Back-end</span></strong></p>`;
    
    document.getElementById("dados_trilha_escolhida").innerHTML = stringHtml;
}

linkDadosPessoais.onclick = function() {
    modalTrilhaEscolhida.style.display = "none";
    modalDadosPessoais.style.display = "block";
    modalSenha.style.display = "none";    

    let stringHtml = 
            `<span>Nome: </span><strong><span>${arrDados.getItem('nome')}</span></strong></p>
             <span>Data de Nascimento: </span><strong><span>${arrDados.getItem('dtNasc')}</span></strong></p>
             <span>E-Mail: </span><strong><span>${arrDados.getItem('email')}</span></strong></p>`;
    
    document.getElementById("dados_dados_pessoais").innerHTML = stringHtml;
}

linkSenha.onclick = function() {
    modalTrilhaEscolhida.style.display = "none";
    modalDadosPessoais.style.display = "none";
    modalSenha.style.display = "block";
    
    let stringHtml = 
            `<span>Cpf: </span><strong><span>${arrDados.getItem('cpf')}</span></strong></p>
             <span>Senha: </span><strong><span>${arrDados.getItem('senha')}</span></strong></p>`;
    
    document.getElementById("dados_senha").innerHTML = stringHtml;
}
