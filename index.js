document.body.addEventListener('click', (e) => {
    // FEATURES DROPDOWN 
    const featuresWrapper = e.target.closest('.features');
    if (featuresWrapper) {
        const img = featuresWrapper.querySelector('img');
        const dropDown = featuresWrapper.querySelector('.dropdown');

        if (dropDown.style.display === 'block') {
            dropDown.style.display = 'none';
            img.src = './Assets/icon-arrow-down.svg';
        } else {
            dropDown.style.display = 'block';
            img.src = './Assets/icon-arrow-up.svg';
        }
        return;
    }

    //  COMPANY DROPDOWN 
    const companyWrapper = e.target.closest('.company');
    if (companyWrapper) {
        const img = companyWrapper.querySelector('img');
        const dropDown = companyWrapper.querySelector('.company-dropdown');

        if (dropDown.style.display === 'block') {
            dropDown.style.display = 'none';
            img.src = './Assets/icon-arrow-down.svg';
        } else {
            dropDown.style.display = 'block';
            img.src = './Assets/icon-arrow-up.svg';
        }
        return;
    }

    //  MOBILE MENU TOGGLE 
    if (e.target.classList.contains('menu-icon')) {
        const card = document.querySelector('.menu-card');
         card.style.display = 'none';
        const main=document.querySelector('.main');

        if (card.classList.contains('active')) {
            card.classList.remove('active');
            main.classList.remove('blur');
            card.style.display = 'none';
        } else {
            card.classList.add('active');
            main.classList.add('blur');
            card.style.display = 'block';
        }
        return;
    }

    //  CLOSE BUTTON 
    if (e.target.classList.contains('close-btn')) {
        const card = document.querySelector('.menu-card');
         const main=document.querySelector('.main');

        main.classList.remove('blur');
        card.classList.remove('active');
        card.style.display = 'none';
        return;
    }
});
