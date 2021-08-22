//---Object---
/*
let user = {
    nama : "ilham",
    umur : 30
};

//console.log(user.nama);

user.jeniskelamin = "perempuan";

console.log(user);
*/

//---Array---

//let buah = ["apel", "jeruk","Manggis"];
//let antrian = [100 , 200, 300, 400, 500, 600]
//console.log(buah[1]);
//console.log(antrian[3]);
//buah[3] = "pepaya";               //menyelipkan/mengganti array sesuai parameter 
/*
console.log(buah);
console.log(buah.shift());          //shift = untuk mengambil array pertama
console.log(buah);
buah.unshift("nanas");              //unshift = untuk menambahkan array pertama
console.log(buah);
*/
/*
console.log(antrian.pop());         //pop = untuk mengambil array paling belakang
console.log(antrian.push(500));     //push = untuk menambahkan array paling belakang
console.log(antrian);

//delete antrian[1];                  //delete = untuk menghapus array tanpa menghilangkan jumlah array
console.log(antrian);
//antrian.splice(0,2);                //splice = untuk menghapus array dengan menghilangkan jumlah array
console.log(antrian);
antrian.splice(0, 2, 200, 300);       //splice = untuk menambahkan array sesuai parameter
console.log(antrian);
*/
/*
antrian.slice(1,3);                   
console.log(antrian);
//console.log(antrian.slice(-2));
console.log(antrian.slice(1));          //slice = untuk mengambil data sesuai parameter di array
*/
/*
console.log(antrian);
console.log(antrian.concat([500, 600]));    //concat = untuk menambahkan array paling belakang
*/
//console.log(antrian);

/*
antrian.forEach((item, index, array) => {                                       //forEach = untuk looping 
    if (index === 2 || index === 4 || item === 100){
        console.log( item + " is at index "  +index + " in " + array);
    } else {
        console.log(item + " tidak sesuai")
    }
});
*/
/*
console.log(antrian.indexOf(500));      //indexOf = untuk mencari index keberapa
*/
/*
//console.log(antrian.includes(1000));    //include = untuk mencari apaka ada dalam array
if(antrian.includes(1000)==true){
    console.log("data ada");
} else {
    console.log("data tidak ditemukan");
}
*/

//---Gabungan object dan array
let user_all = [
    {id : 1, nama : "ilham", nilai : 90}, 
    {id : 2, nama : "putra", nilai : 70}, 
    {id : 3, nama : "arifa", nilai : 50},
];
/*
let user = user_all.find((item) => {                //find
    if(item.nilai < 80 ) {
        return item.nama;
    }
});

//console.log(user.id);
console.log(user);

let data = user_all.filter((item) => item.nilai < 80); //filter
console.log("filter : " + data);
*/

let datamap =user_all.map(item => {                     //map sama seperti find
return item.nilai
});


console.log(datamap);
console.log(datamap.sort());
let reduce = datamap.reduce((sum, current) => {
    return sum+current;
}, 0);
console.log(reduce);