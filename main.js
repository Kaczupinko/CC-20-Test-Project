// Pobranie przycisku i listy rozwijanej
const dropdownBtn = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

// Obsluga zdarzenia klikniecia na przycisk
dropdownBtn.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
});

// Zamykanie listy rozwijanej po kliknieciu w inny obszar strony
document.addEventListener('click', function (event) {
    const dropdowns = document.getElementsByClassName('dropdown-content');
    Array.from(dropdowns).forEach(function (dropdown) {
        if (dropdown.classList.contains('show') && !event.target.matches('.dropbtn')) {
            dropdown.classList.remove('show');
        }
    });
});