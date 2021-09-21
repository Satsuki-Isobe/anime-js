import anime from './node_modules/animejs/lib/anime.es.js'

window.addEventListener("load", () => {
    anime({
        targets: '.box',
        scale: [100],
        // borderRadius: ['50%'],
        duration: 2000,
        // loop: true,
        easing: 'easeInOutExpo',
    })

    anime({
        targets:'.box',
        opacity: 0,
        duration: 1500,
        delay: 800
    })
})