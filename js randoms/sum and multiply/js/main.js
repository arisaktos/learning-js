var numbers = [1, 2, 3, 4, 5, 6];

function mathStuff(param) {
    var suma = 0;
    var iloczyn = 1;

    for (var i = 0; i < param.length; i++) {
        suma += param[i];
        iloczyn *= param[i];
    }

    console.log('Suma = ' + suma + '\n' + 'Iloczyn = ' + iloczyn);
}

mathStuff(numbers);
