let statisticsClient = document.querySelector('.clients-statistics');
let quoteClient = document.querySelector('.quote-client');

//si on clique sur la classe .clients-statistics, on ajoute une classe .active à la classe .quote-client sauf si elle a déjà la classe .active
statisticsClient.addEventListener('click', function () {
    if (!quoteClient.classList.contains('visible')) {
        quoteClient.classList.add('visible');
    } else {
        quoteClient.classList.remove('visible');
    }
});

let iconMenu = document.querySelector('.menu-aside');
let menuAside = document.querySelector('.aside');
let asideBox = document.querySelector('.aside-box');

//si on clique sur la classe .menu-aside, on ajoute une classe .active à la classe .aside sauf si elle a déjà la classe .active
iconMenu.addEventListener('click', function () {
    if (!menuAside.classList.contains('active')) {

        // menuAside.style.display = 'flex';
        menuAside.classList.add('active');
        menuAside.style.right = '0px';
        iconMenu.style.rotate = '90deg';

    } else {

        menuAside.classList.remove('active');
        iconMenu.style.rotate = '0deg';
        menuAside.style.right = '-200px';
    }
});


// validation formulaire
function validate(form) {
    fail = validateEmail(form.mail1.value);

    if (fail == "") return true;
    else {
        alert(fail);
        return false;
    }
}