export const firstScreenAnimation = ({ parent = 'body' } = {}) => {
    const parentElement = document.querySelector(parent)
    const tl = gsap.timeline()
    const titles = parentElement.querySelectorAll('.text-effect')
    // Анимация заголовков
    if (titles.length) {
        tl.from(titles, {
            opacity: 1,
            clearProps: 'all'
        })
    }
    return tl
}