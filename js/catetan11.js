var panjang = 7; // atau diameter lingkaran
var lebar = 3;
var tinggi = 2; // tinggi bangun ruang

// tinggi = 0;
if(tinggi > 0)
{
	console.log('Luas selimut balok: ' + panjang * lebar * tinggi + '<br/>');
    console.log('Luas selimut tabung: ' + 2 * 3.14 * (panjang/2) * (panjang/2 + tinggi) + '<br/>');
}
else
{
	console.log('Luas persegi: ' + panjang * lebar + '<br/>');
    console.log('Luas lingkaran: ' + 0.25 * 3.14 * (panjang*panjang) + '<br/>');
}