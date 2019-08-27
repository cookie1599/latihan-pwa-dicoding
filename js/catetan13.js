var matematika = 63;
var wawancara = 'A';

if(matematika > 60)
{
	var keterangan = 'Lolos tes, dengan predikat';
	if(wawancara == 'A')
	{
		keterangan == 'Memuaskan';
		console.log(keterangan);
	}
	else if(wawancara == 'B')
	{
		keterangan == "Cukup";
		console.log(keterangan);
	}
	else 
	{
		keterangan += 'Tidak lolos tes';
		console.log(keterangan);
	}
}