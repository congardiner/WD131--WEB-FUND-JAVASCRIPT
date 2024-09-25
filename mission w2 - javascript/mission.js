// changeTheme funct

const changeTheme = document.getElementById('change-Theme');
const mainDiv = document.querySelector('.main');
const logoImage = document.querySelector('footer img')


changeTheme.addEventListener('change', () => {
    if (changeTheme.value === 'dark') {
        mainDiv.classList.add('dark-theme');
        logoImage.src = 'byui-logo_blue.webp';

    } else {
        mainDiv.classList.remove('dark-theme');
        logoImage.src = 'byui-logo_white.webp';
    }
});
