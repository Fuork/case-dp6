(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics_debug.js','ga');

//Link do scripto alterado para debug. link: https://www.google-analytics.com/analytics.js

//Debug ativado
window.ga_debug = {trace: true};
ga('create', 'UA-12345-6', 'auto');
//Visualização Padrão.
ga('send', 'pageview');
    //Entre em contato
    document.getElementById("id_contato").addEventListener("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo'
            });

        });
    //Download PDF
    document.getElementById("pdf_download").addEventListener("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf'
            });

        });
    //Botões da página analise.
    document.getElementById("id_lorem").addEventListener("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Lorem'
            });
        
        });
    
    document.getElementById("id_ipsum").addEventListener("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Ipsum'
            });
        
        });
    
    document.getElementById("id_dolor").addEventListener("click", function () {
        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: 'Dolor'
            });
        
        });
//campos preenchidos e envio do submit.
function validar() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var aceito = document.getElementById("aceito").checked;
    
    if(nome.value != ''){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'nome',
            eventLabel: 'preencheu'
            });
    }
    if(email.value != ''){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'email',
            eventLabel: 'preencheu'
            });
    }
    if(telefone.value != ''){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'telefone',
            eventLabel: 'preencheu'
            });
    }
    if(aceito == true){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: 'aceito',
            eventLabel: 'preencheu'
            });
    }
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
        });
    
}

//fim