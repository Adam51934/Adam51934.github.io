var konf1 = {
    distance: '150%',
    origin: 'bottom',
    delay: 750,
    duration: 500,
};

var konf2 = {
    distance: '150%',
    origin: 'bottom',
    delay: 750,
    duration: 1500,
};

var konf3 = {
    distance: '150%',
    origin: 'bottom',
    delay: 750,
    duration:2500,
};

ScrollReveal({ reset: true });

ScrollReveal().reveal('.czesc', konf1);

ScrollReveal().reveal('.imie', konf2);

ScrollReveal().reveal('.zdjecie', konf3);

