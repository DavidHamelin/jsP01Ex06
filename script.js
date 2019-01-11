function modulo()
{
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var result = parseInt(firstNumber) / secondNumber;
    var moduloResult = parseInt(firstNumber) % secondNumber;

    var regexNum = /^[0-9.,]+$/i; /* n'accepte que les nombres */
    if (regexNum.test(firstNumber) == false) {
        alert('Premier nombre non valide')
    }
    else if (regexNum.test(secondNumber) == false) {
        alert('Deuxième nombre non valide')
    }
    else {
        alert(` ${firstNumber} / ${secondNumber} \= ${result} \nIl reste : ${moduloResult}`);
    }
}