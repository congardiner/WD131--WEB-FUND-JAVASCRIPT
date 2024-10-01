// changeTheme funct

const changeTheme = document.getElementById('change-Theme');
const mainDiv = document.querySelector('.main');
const logoImage = document.querySelector('footer img')


changeTheme.addEventListener('change', () => {
    if (changeTheme.value === 'dark') {
        mainDiv.classList.add('dark-theme');
        logoImage.src = 'byui-logo_white.png';
        // need to change the photo to match theme

    } else {
        mainDiv.classList.remove('dark-theme');
        logoImage.src = 'byui-logo_blue.webp';
        // need to change the photo to match theme
    }
});
