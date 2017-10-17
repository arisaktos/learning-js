class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {

        var przeczytanaText;

        if (this.przeczytana === true) {
            przeczytanaText = "przeczytana";
        } else if (this.przeczytana === false) {
            przeczytanaText = "nie przeczytana";
        } else {
            przeczytanaText = "[nie podano]";
        }
        var resultat = `Ksiazka ma tytul ${this.tytul}, autorem jest ${this.autor} i zostala ${przeczytanaText}`;
        return resultat;
    }
}

var ksiazka1 = new Ksiazka('Wiedzmin', 'Andrzej Sapkowski', false);

var ksiazka2 = new Ksiazka('Harry Potter', 'JK Rowling', true);

var ksiazka3 = new Ksiazka('Wladca Pierscieni', 'JRR Tolkien', false);

var biblioteka = [ksiazka1, ksiazka2, ksiazka3];

function iloscPrzeczytanych(zbiorKsiazek) {
    var przeczytaneKsiazki = 0;

    for (var i = 0; i < zbiorKsiazek.length; i++) {
        if (zbiorKsiazek[i].przeczytana === true) {
            przeczytaneKsiazki++;
            console.log(zbiorKsiazek[i].opiszKsiazke());
        }

    }
    return przeczytaneKsiazki;
}

console.log("Ilosc przeczytanych ksiazek %s ", iloscPrzeczytanych(biblioteka));
