const formElement = document.getElementById('form');
const inputElements = document.querySelectorAll("#form input");


function proveri(input) {
    let trigger = false;
    let test = '';
    let tekst;
    let rezultat;
    let brojac = 0;

    for(let i = 0; i < input.length; i++){
        switch(input[i].id){ 
            case "name":
                test = /^[a-zA-Z]{2,}$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;

            case "surname":
                test = /^[a-zA-Z]{2,}$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;

            case "email":
                test = /^[a-z0-9]+\w?([\.]?[a-z0-9]+)*@[a-z0-9]+([\.-]?[a-z0-9]+)(\.[a-z]{2,6})$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;

            case "password":
                test = /^[a-zA-Z]{8,}$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;

            case "url":
                test = /^((http(s)?\:\/\/)?www\.)?[a-z]{2,}\w?\.[a-z]{0,}$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;

            case "phone":
                test = /^06[0-9]\/[0-9]{3}\-[0-9]{3,4}$/;
                tekst = input[i].value;
                rezultat = tekst.match(test);
                if(rezultat != null) {
                    brojac++;
                    input[i].style.border = '2px solid green';
                }else {
                    input[i].style.border = '2px solid red';
                }
            break;
        }
    }
    if(brojac === 6){
        trigger = true;
        return trigger;
    }else{
        return trigger;
    }
}

formElement.addEventListener('submit', function(e) {
    e.preventDefault();
    let check = proveri(inputElements);
    if(check){
        alert('SUCCESS!');
        //formElement.submit();
    }else {
        alert('ERROR!');
    }
});

/*
regex za email, vezba na casu:
^[a-z0-9]+\w?([\.]?[a-z0-9]+)*@[a-z0-9]+([\.-]?[a-z0-9]+)(\.[a-z]{2,6})$
==========================================================================================================================
DOMACI ZADATAK:
1. Validacija telefona
    -Prve dve cifre moraju da budu 0 i 6, kao i da treca cifra moze da bude prema svim mobilnim operaterima u Srbiji
     06x/xxx-xxxx
2. Validacija web adrese
    -http/https moze a ne mora, ukoliko upisujemo // separatori obavezni
    -www-je obavezan unos
    -ime domene ne sme da bude krace od 2 karaktera, drugi karakter ne sme da bude broj
    -dozvoljeno unosenje jedne tacke ili jedne srednje crte posle drugog karaktera
    -top level domen moze da sadrzi samo slova duzine od dva do sest
3. Password ne sme da bude manji od 8 ime manje od 2 prezime od 2
==========================================================================================================================
WHO.IS - servis(ICAN)
*/