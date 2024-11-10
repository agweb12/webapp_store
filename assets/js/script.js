var statisticsClient = document.querySelector('.clients-statistics');
var quoteClient = document.querySelector('.quote-client');

//si on clique sur la classe .clients-statistics, on ajoute une classe .active à la classe .quote-client sauf si elle a déjà la classe .active
statisticsClient.addEventListener('click', function () {
    if (!quoteClient.classList.contains('visible')) {
        quoteClient.classList.add('visible');
    } else {
        quoteClient.classList.remove('visible');
    }
});