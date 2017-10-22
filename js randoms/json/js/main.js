var jsonPracownicy = {
    "pracownicy": [
        {
            firstName: 'Krystian',
            lastName: 'Dziopa',
        },
        {
            firstName: 'Anna',
            lastName: 'Szapiel',
        },
        {
            firstName: 'Piotr',
            lastName: 'Żmuda',
        }
    ]
}

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function (pracownik, index) {
    console.log('Index: %i  / Imie: %s / Nazwisko: %s', index, pracownik.firstName, pracownik.lastName);
})
