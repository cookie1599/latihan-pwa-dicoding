// fungsi untuk menghitung luas lingkaran
function luasLingkaran(diameter=radius){
    //2*diameter;
    return 1/4*22/7*diameter*diameter;
}

// menghitung luas berdasarkan diameter
var diameter = 14;
var luas = luasLingkaran(diameter);
console.log('luas berdasarkan diameter: ' + luas +'<br/>');

// menghitung luas berdasarkan jari-jari
var radius = 7;
var luas = luasLingkaran(radius, false);
console.log('luas berdasarkan radius: ' + luas +'<br/>');