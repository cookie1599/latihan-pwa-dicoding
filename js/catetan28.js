function cetakPesan(nama, bahasa='id')
{
    var pesan = 'Selamat datang, ' + nama;
    if(bahasa == 'en')
    {
        pesan = 'Welcome, ' + nama;
    }
    console.log(pesan);
}
var nama = 'Bambang';
cetakPesan(nama);