function kuadrat(angka)
{
    angka.key *= angka.key;
}

var x = {key:5};
console.log('sebelum dikuadratkan: ' + x['key'] + '<br/>');
kuadrat(x);
console.log('setelah dikuadratkan: ' + x['key'] + '<br/>');
