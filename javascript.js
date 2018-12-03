//soal No 4
function nilaiperbandingan(){
	var numberCollection = [4,5,1,7,9];
	numberCollection.sort()
	console.log(numberCollection.toString())
	var maxdiff = (numberCollection [numberCollection.length-1] - numberCollection[0])
	console.log(maxdiff.toString())
}
function tampilkan(){
	var nilai_form=document.getElementById("input_form").value;
	document.getElementById("hasil").innerHTML=nilai_form;
}
document.getElementById("tombol_form").addEventListener("click", nilai_form);