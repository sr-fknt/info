// Плавна прокрутка до якорів
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // анімка карток
    const cards = document.querySelectorAll('.fknt-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) rotate(-5deg)';
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) rotate(0)';
        }, index * 50);
    });

    // анімка кнопок
    const buttons = document.querySelectorAll('.btn-fknt-red, .btn-outline-fknt-red');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.15) rotate(3deg)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1) rotate(0)';
        });
    });
});