function fnMostrarHoraAtual(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    alert("Hora atual: " + (hours) +":"+  (minutes) +":"+(seconds));
}


function fnIdiomaPortugues(){
    document.getElementById("menu1").innerText = "Inicial"
    document.getElementById("menu2").innerText = "Imóveis"
    document.getElementById("menu3").innerText = "Sobre nós"
    document.getElementById("menu4").innerText = "Contato"
    document.getElementById("titulo1").innerText = "Encontre a casa dos seus sonhos"
    document.getElementById("subtitulo1").innerText = "Explore nossa ampla variedade de imóveis e encontre a casa perfeita para você."
    document.getElementById("botao1").innerText = "Pesquise Imóveis"
    document.getElementById("botao2").innerText = "Saiba Mais"
    document.getElementById("contato1").innerText = "Entre em contato conosco hoje mesmo!"
    document.getElementById("contato2").innerText = "Entre em contato"
    document.getElementById("contato3").innerText = "Telefone"
    document.getElementById("contato4").innerText = "Escritório"
    document.getElementById("contato5").innerText = "Assine nossa newsletter para receber as últimas atualizações sobre novos recursos e lançamentos de produtos."
    document.getElementById("contato6").innerText = "Cadastrar"
    document.getElementById("rodape1").innerText = "© 2025 Guto Xavier. Todos os direitos reservados."
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText = "Home"
    document.getElementById("menu2").innerText = "Properties"
    document.getElementById("menu3").innerText = "About Us"
    document.getElementById("menu4").innerText = "Contact"
    document.getElementById("titulo1").innerText = "Find Your Dream Home"
    document.getElementById("subtitulo1").innerText = "Explore our wide range of properties and find the perfect home for you."
    document.getElementById("botao1").innerText = "Search Properties"
    document.getElementById("botao2").innerText = "Learn More"
    document.getElementById("contato1").innerText = "Get in touch with us today!"
    document.getElementById("contato2").innerText = "Contact Us"
    document.getElementById("contato3").innerText = "Phone"
    document.getElementById("contato4").innerText = "Office"
    document.getElementById("contato5").innerText = "Subscribe to our newsletter for the latest updates on new features and product releases."
    document.getElementById("contato6").innerText = "Subscribe"
    document.getElementById("rodape1").innerText = "© 2025 Guto Xavier. All rights reserved."
}

function fnBanner1(){
    document.getElementById("banner").src="images/banner01.jpg"
}
function fnBanner2(){
    document.getElementById("banner").src="images/banner02.jpg"
}
function fnBanner3(){
    document.getElementById("banner").src="images/banner03.jpg"
}
function fnBanner4(){
    document.getElementById("banner").src="images/banner04.jpg"
}

function fnRegistrarContato(){
    let email = document.getElementById("email1").value

    //limpar os campos

    document.getElementById("email1").value = ""

    alert("seu email " + email + " foi cadastrado com sucesso.")
}

function fnHoraAtual(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    document.getElementById("hora").innerText = (hours) +":"+  (minutes) +":"+(seconds)
}
setInterval(fnHoraAtual, 1000);