var herbivora = new Array('kambing', 'sapi', 'kuda');
var karnivora = new Array('harimau', 'serigala', 'anjing');
var omnivora = new Array('ayam', 'monyet', 'beruang');
var binatang = new Array(herbivora, karnivora, omnivora);

  binatang.forEach(function(jenis, index)
  {
      jenis.forEach(function(nama)
      {
          console.log('index ke-'+ index + nama + '<br/>');
      });
  });