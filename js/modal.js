function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar')
    if(modal){
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalID || e.target.className == 'modal__fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}

const botaoMensagem = document.getElementById('botao__msg');
botaoMensagem.addEventListener('click', () => iniciaModal('modal__mensagem'));