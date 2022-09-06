
let divColors = document.querySelector('#color-palette');
let preto = document.querySelector('.black');
let vermelho = document.querySelector('.red');
let azul = document.querySelector('.blue');
let verde = document.querySelector('.green');
let limpar = document.querySelector('.clear-board');
let tabela = document.querySelector('#pixel-board');
let divSelected = document.querySelector('.selected');
let colorSelected;

function clearSelectedColor() {
    divSelected.classList.remove('selected');
}

function addSelected (target) {
    target.classList.add('selected');
    divSelected = document.querySelector('.selected');
}

function getSelectedColor () {
    const cor = window.getComputedStyle(divSelected, null).getPropertyValue('background-color');
    return cor;
}

function pintar(target) {
    target.style.backgroundColor = colorSelected;
}

function limparTabela () {
    let pixels = document.querySelectorAll('.pixel');
    for (let i=0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = '';
    }
}

colorSelected = getSelectedColor(divSelected);

divColors.addEventListener('click', function (event) {
    clearSelectedColor();
    addSelected(event.target);
    colorSelected = getSelectedColor();
} );

tabela.addEventListener('click', function (event) {
    pintar(event.target);
});

limpar.addEventListener('click', function () {
    limparTabela ();
});