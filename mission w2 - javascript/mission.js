// changeTheme funct

const changeTheme = document.getElementById('changeTheme');

changeTheme.addEventListener('change', () => {
    const changeTheme = changeTheme.value;

    if (changeTheme === 'dark') {
        document.body.classList.add('dark');
    }  else {
        document.body.classList.remove('dark');
    }
});

