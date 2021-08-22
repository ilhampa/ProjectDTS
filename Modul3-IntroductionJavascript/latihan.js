//---inilatihan---
/*
console.log("Welcome Home")

//---inivariable---
let message = "hello";
message="mudah belajar js"; 
*/

//---ini constanta---
/*
onst pesan="belajar";
pesan = "belajar2";
console.log(message);
console.log(pesan); 
*/

//---tipedata---
/* 
let angka = 1234;
let str = "string";
let test;
test="belajar";
//console.log(test); 
*/

//---perbandingan---
/*
console.log (2 > 1);
//console.log (2 < 1);
//console.log(0==false);
//console.log(0===false)
//if (angka == 123) {
//    console.log("kamu benar");
//} else {
//    console.log("kamu salah");
}
*/

/*
let tesswab;
tesswab = ("belum tes");
if (tesswab == "negatif") {
    console.log("kamu tidak perlu isoma");
} else if (tesswab == "positif") {
    console.log("Hasil kamu " + tesswab + ", wajib isoma");
} else {
    console.log("Vaksin dulu aja");
} 
*/
//document.getElementById("text").innerHTML = tesswab

//let age = 17;
/*
let access = (age > 17) ? "dewasa" : "belum cukup umur";
console.log(age + " maka " +access) 
*/

/*
let pesan;
let jam = 9;
if(jam < 10 || jam > 18) {
    pesan = "Kantor buka !!";
} else {
    pesan = "Kantor tutup";
}
console.log(pesan); 
*/

/*
let vaksin,tes ;
vaksin = "belum"
vaksin = "-"
if(vaksin == 'belum' && tes == '+'){
    pesan = "anda keren !!";
} else {
    pesan = "hati-hati corona";
}
console.log(pesan); 
*/

//---perulangan---
/*
let angka = 11;
while (angka <= 10){
    console.log("angka :  " +angka);
    angka++;
}

let angka2 = 1;
do {
    console.log("angka2 : " +angka2 );
    angka2++;
} while (angka2 <=3);
*/

/*
for(let angka3 = 4; angka3 > 0; angka3--){
    console.log("for:" + angka3);
}
*/

//---case---
/*
let nilai = 90-20, ket;
switch(nilai){
    case 90 :
        ket = "A" ;
        break;
    case 80 :
        ket = "B" ;
        break;
    default :
        ket = "c" ;
}
console.log("nilai : " + nilai + " , " + ket);
*/
//---function---

function ceknilai(nama, nilai){
    let text;
    if (nilai > 90) {
        text = "A";
    } else if (nilai > 75){
        text = "B";
    } else if (nilai > 60){
        text = "C";
    } else {
        text = "D";
    }
    return nama + ", nilainya : " + text;
}

let nilai = 60;

function message(nama, keterangan = "berhasil"){
    let siswa = ceknilai(nama, nilai);
    let siswa2 = ceknilai("rani", 90);
    console.log("hasil : " +siswa);
    console.log("siswa2 : " +siswa2 +" " +keterangan);
}

message("ahmad", "semangat belajar");



