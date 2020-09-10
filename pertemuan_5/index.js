/*
    1. Array

//Deklarasi arrray

let angka = [1,2,3,4,5,6,7,8];
console.log(angka);
let buah = ["mangga", "jeruk", "apel"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function () {
    return "Hello Array";
};

let arr2 = ["text", 1, true, myFunc(), [1,2,3,4,5]];
//Mengakses element dalam array 
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log(typeof arr2); //array = object
console.log(arr2.length); //melihat element

//deklarasi array menggunakan kata kunci new 
let buah2 = new Array("salak", "durian", "sirsak");
console.log(buah2);
*/

//manipulasi array 
// 1. Menambah isi array

//let mhs = [];
//mhs[0] = "Putu";
//mhs[1] = "Ryan";
//mhs[2] = "Halim";
//mhs[3] = "vincent";

//console.log(mhs);

// 2. Mengubah isi array
//mhs[2] = "Pedi";
//console.log(mhs);

// 3. Menghapus isi array
//mhs[2] = undefined;
//console.log(mhs);

// 4. Menapilkan isi array
//let mhs = ["Putu", "Halim", "Ryan", "vincent", "Pedi"];

//for (let i = 0; i < mhs.length; i++){
//    console.log("Mahasiswa ke-" + (i+1) + "adalah") +;
//}

//Method dalam array 
//1. Lenght

//2. toString
//let mhs = ["Putu", "Halim", "Ryan", "vincent", "Pedi"];
//console.log(mhs.toString());

//3. Join
//console.log(mhs.join(" - "));

//4. Push, pop, unshift, shift
//mhs.push("Feisy");
//mhs.push("leon");
//console.log(mhs.join(" - "));
//mhs.pop();
//mhs.pop();
//console.log(mhs.join(" - "));

//mhs.unshift("Feisy");
//mhs.unshift("leon");
//console.log(mhs.join(" - "));
//mhs.shift();
//mhs.shift();
//console.log(mhs.join(" - "));

/*5. Concat
let buah = ["Mangga", "Apple", "Anggur"];
let sayur = ["Kangkung", "Bayam", "Buncis"];

let makanan = buah.concat(sayur);
console.log(makanan);
*/

/*6. Splice and slice

Splice
let buah = ["Pisang", "Anggur", "Apple", "Jeruk"];
buah.splice(2, 0, "Mellon", "Semangka");
console.log(buah.join(" - "));

Slice
let buah2 = buah.slice(0, 3);
console.log(buah.join(" - "));
*/

/*7. forEach dan map

forEach
//for (let i = 0; i < mhs.length; i++){
//    console.log("Mahasiswa ke-" + (i+1) + "adalah") +;
//}

let angka = [1,2,3,4,5,6,7,8];
let tampilAngka = function (el){
    console.log(el);
}
angka.forEach(tampilAngka);

Map
let angka2 = angka.map(function (el){
    return el;
});

console.log (angka2);
*/

/*8. Sort 
let angka = [1,100,2,4,20,3,8,7];
angka.sort(function(a, b){
    return a - b;
});
console.log(angka);
let mhs = ["Putu", "Ryan", "Halim", "Vincent", "Pedi"];
mhs.sort();
console.log(mhs);
*/

//9. Filter
let angka = [1,100,2,4,20,3,8,7];
let angka2 = angka.filter(function (el){
    return el > 5;
});
console.log(angka2);
