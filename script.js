const hearthContainer = document.querySelector(".hearth-container");
const time = 100;

function randomHearths() {
        const element = document.createElement('i');
        const classes = ["fa-solid", "fa-heart", "hearth"];
        classes.forEach((classe) => element.classList.add(classe));

        // Define a posição aleatória
        element.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';

        // Adiciona o elemento ao body
        hearthContainer.appendChild(element);
}

// Função para a contagem crescente
function updateCounter() {
    const startDate = new Date('2023-10-06T00:00:00'); // Data inicial
    const now = new Date(); // Data atual

    const timeDifference = now - startDate;

    const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = 
        `${years} anos, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;

    setTimeout(updateCounter, 1000);
}

// Inicializa a contagem
updateCounter();

// Função para o slideshow
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

// Inicializa o slideshow
showSlides();
setInterval(randomHearths, time)

function showMessage() {
    document.getElementById("message").style.display = "block";
}

/*audio*/
var audio = new Audio('Download.mp3');
audio.addEventListener('canplaythrough', function() {
  audio.play();
});


window.addEventListener("load", () => audio.play());

const correctPassword = "18092023"; 
let timerInterval;
const startDate = new Date("2000-09-18T20:30:00");

function authenticate() {
  const passwordInput = document.getElementById("passwordInput").value;
  if (passwordInput === correctPassword) {
    const loginContainer = document.getElementById("login");
    const timerDiv = document.getElementById("timer");

    if (loginContainer && timerDiv) {
      loginContainer.style.display = "none";
      timerDiv.style.display = "block";
      startTimer();
      updateTimer();
    }

    document.querySelector('.login-container').remove();
    document.querySelector('.content-container').classList.remove('hidden');
  } else {
    alert("Senha incorreta meu amor, tente novamente!!");
  }
}

function dica() {
  alert("A senha é o dia que nos conhecemos via internet...(dia, mês, ano) sem espaço, ex: 17102003")
}
