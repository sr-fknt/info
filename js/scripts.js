document.addEventListener('DOMContentLoaded', () => {

    // Плавна прокрутка до якорів
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Шапка: легка тінь після скролу
    const header = document.querySelector('.header-fixed');
    if (header) {
        const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        // Бігучий рядок одразу під шапкою (декоративний, без нового контенту — просто назва бренду)
        const ticker = document.createElement('div');
        ticker.className = 'fknt-ticker';
        ticker.setAttribute('aria-hidden', 'true');
        const phrase = 'СТУДРАДА ФКНТ <img src="assets/plane.png" alt="Літак" class="plane-icon"> ';
        ticker.innerHTML = `<div class="fknt-ticker-track"><span>${phrase.repeat(10)}</span><span>${phrase.repeat(10)}</span></div>`;
        header.insertAdjacentElement('afterend', ticker);
    }

    // Плавна поява елементів при скролі
    const revealSelectors = [
        '.fknt-card',
        '.faq-card',
        '.fknt-note-card',
        '.fknt-dorm-block',
        '.fknt-accordion .accordion-item',
        '.org-gallery img',
        '.fknt-formula'
    ];

    const revealEls = document.querySelectorAll(revealSelectors.join(','));

    if ('IntersectionObserver' in window && revealEls.length) {
        revealEls.forEach(el => el.classList.add('reveal'));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, i) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    setTimeout(() => el.classList.add('is-visible'), i * 40);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => observer.observe(el));
    } else {
        revealEls.forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'none';
        });
    }
});
