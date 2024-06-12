function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon-menu').src="./assets/img/icon-menu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon-menu').src="./assets/img/icon-menu-close.png";
    }
}

/* Mostrar ano atual no footer */
const ano = document.getElementById("mostrarAnoAtual");
const anoAtual = new Date();
ano.innerHTML = anoAtual.getFullYear();

var root = document.documentElement;
root.className += ' js';

function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}