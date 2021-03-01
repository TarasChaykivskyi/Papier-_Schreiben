import './../css/main.scss';
// import nunjucks from 'nunjucks';

(function () {
    const burgerMenu = $('#burger-menu');
    const burgerShow = $('#burger-show');
    const burgerClose = $('#burger-close');

    const actionBurger = [burgerMenu, burgerShow, burgerClose]

    burgerShow.on('click', () => toggleVisibilityMenu(true))
    burgerClose.on('click', () => toggleVisibilityMenu(false))

    function toggleVisibilityMenu(isShow) {
        actionBurger.forEach(item => {
            item.toggleClass('active');
        })
    }

    $(window).on('resize', () => {
        burgerClose.removeClass('active');
        if(window.innerWidth < 980) {
            burgerMenu.removeClass('active');
            burgerShow.removeClass('active');
        }
    })
})();

(function () {
    const btnSearch = $('#search-button');
    const search = $('#search');

    btnSearch.on('click', () => {
        search.addClass('active');
    })

})();

(function () {
    const faqAccordion = $('#faq-accordion .accordion-item');

    faqAccordion.on('click', function() {

        console.log(faqAccordion)

        $(this).toggleClass('active')
    })
})()
