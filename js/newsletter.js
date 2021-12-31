function iniciaNewsletter(newsletterID){
    const newsletter = document.getElementById(newsletterID);
    newsletter.classList.add('mostrar')
    if(newsletter){
        newsletter.addEventListener('click', (e) => {
            if(e.target.id == newsletterID || e.target.className == 'newsletter__fechar') {
                newsletter.classList.remove('mostrar');
            }
        });
    }
}

const botaoNewsletter = document.getElementById('botao__nwt');
botaoNewsletter.addEventListener('click', () => iniciaNewsletter('newsletter__modal'));