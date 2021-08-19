
//faq
document.querySelectorAll('.faq-trigger').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('faq-item--active')) {
            parent.classList.remove('faq-item--active');
        } else {
            document.querySelectorAll('.faq-item').forEach((child) => child.classList.remove('faq-item--active'));

            parent.classList.toggle('faq-item--active')
        }
    });
});