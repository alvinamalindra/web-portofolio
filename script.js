const swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    direction: 'vertical',
    loop: true,
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: false,
        shadowOffset: 0,
        shadowScale: 0.01,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            const slides = ['Home', 'Website Build', 'Data Analysis', 'Contact'];
            return '<span class="' + className + '">' + slides[index] + '</span>';
        },
    },
});