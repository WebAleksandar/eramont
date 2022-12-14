// $(document).ready(function(){
//     $('#proba tbody tr:even').css('background-color', '#fff');
// });

//dinamicko ispisivanje menija
const liName = new Array('POČETNA', 'USLUGE', 'AUTOR', 'KONTAKT');
const liHref = new Array('#pocetna', '#usluge', '#autor', '#kontakt');
let dinMeni = "";

for (let i in liName) {
    dinMeni +=`<li class="navLi"><a class="navA" href="${liHref[i]}">${liName[i]}</a></li>`
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

// Kontakt forma

// Dinamicka padajuca lista
    let formaObj = document.getElementById('mainFormId');
  
    let nizUsluga = new Array('Grejanje','Vodoinstalacija','Sanitarija','Intervencije');
    let nizUslugaVal = new Array('Grejanje','Vodoinstalacija','Sanitarija','Intervencije');

    let selectTag = document.createElement('select');
    selectTag.setAttribute('id','ddLista');
    console.log(selectTag);
    let prviOptionTag = document.createElement('option');
    prviOptionTag.setAttribute('value','0');

    let prviOptionTagTekst = document.createTextNode('Izaberite uslugu');

    prviOptionTag.appendChild(prviOptionTagTekst);
    selectTag.appendChild(prviOptionTag);
    

    for (const i in nizUsluga) {
        var slOptionTagovi = document.createElement('option');
        slOptionTagovi.setAttribute('value', nizUslugaVal[i]);

        var slOptionTagTekst = document.createTextNode(nizUsluga[i]);
        slOptionTagovi.appendChild(slOptionTagTekst);

        selectTag.appendChild(slOptionTagovi);
    }
    formaObj.appendChild(selectTag);
// Provera forme regularnim izrazima
document.querySelector('.submit').addEventListener('click', () => {
    let brojTel = document.getElementById('formNum');
    let regProvera = /^(\+381[0-9]{8,9}|(06|01)[0-9]{7,8})$/;
})
    
// Footer ---------------------------------------------------------------------------------------
//Dinamicko dodavanje linkova u futeru
let glavni = document.getElementById('firstBox');

let aName = new Array('CSS','Responsive','Sitemap');
let aHref = new Array('assets/css/style.css','assets/css/responsive.css','sitemap.xml');
let iconVal = new Array('<i class="fa-brands fa-css3-alt"></i>','<i class="fa-brands fa-css3"></i>','<i class="fa-solid fa-sitemap"></i>');

for (const i in aHref) {
    var aElem = document.createElement('a');
    aElem.setAttribute('href', aHref[i]);
    aElem.setAttribute('target', '_blank');
    aElem.innerHTML = iconVal[i] + aName[i];
    glavni.appendChild(aElem);
}

let glavni2 = document.getElementById('links2');

let aHref2 = new Array('https://www.instagram.com/','https://www.facebook.com/','https://github.com/');
let iconVal2 = new Array('<i class="fa-brands fa-instagram"></i>','<i class="fa-brands fa-facebook"></i>','<i class="fa-brands fa-github"></i>');

for (const i in aHref2) {
    var aElem2 = document.createElement('a');
    aElem2.setAttribute('href', aHref2[i]);
    aElem2.setAttribute('target', '_blank');
    aElem2.innerHTML = iconVal2[i];
    var liTag = document.createElement('li');
    liTag.appendChild(aElem2);
    glavni2.appendChild(liTag);
}



