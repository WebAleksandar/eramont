//dinamicko ispisivanje menija
const liName = new Array('POČETNA', 'USLUGE', 'AUTOR', 'KONTAKT');
const liNameLinks = new Array('#pocetna', '#usluge', '#autor', '#kontakt');
let dinMeni = "";

for (let i in liName) {
    dinMeni +=`<li class="navLi"><a class="navA" href="${liNameLinks[i]}">${liName[i]}</a></li>`
}
const ul = document.querySelector('.navLinks').innerHTML = dinMeni;
const nav = document.querySelector('.navLinks');

// hamburger meni
const hamburgerBtn = document.querySelector('.hamburger');
// Event koji prikazuje meni na klik
hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    nav.classList.toggle('active');
});
// Event koji sklanja meni po kliku na neki link
document.querySelectorAll('.navLinks').forEach(ukloni => ukloni.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    nav.classList.remove('active');
}))

// Footer
