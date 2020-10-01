// Rest and Spread Operator
// -------------------------


//REST OPERATOR
//const hitung = (a, b, c, d, e) => {
//    const angka = {a, b, c, d, e};
//    let total = 0;
//    for (let i = 0; i < 5; i++){
//        total = total + angka[i];
//    }
//    return total;
//};

//const hitung = (...angka) => {
//    let total = 0;
//    angka.forEach((el) => {
//        total = total + el;
//    });
//    return total;
//};

//console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//const hitung = (param1, param2, ...params) => {
//    console.log(param1);
//    console.log(param2);
    
//    let total = 0;
//    params.forEach((el) => {
//        total = total + el;
//    });
//    return total;
//};

//console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


//SPREAD OPERATOR

//1. duplikasi array
//const angka = [1, 2, 3, 4, 5];
//const angka2 = [...angka];

//angka[0] = 10;
//console.log(angka);
//console.log(angka2);

//console.log(angka);
//console.log(...angka);

//2. Menggabungkan array
//const angka1 = [1, 2, 3, 4, 5];
//const angka2 = [6, 7, 8, 9, 10];
//const angka3 = [12, 13, 14, 15];

//const gabung5 = angka1.concat(angka2, angka3);
//console.log(gabung5);

//const gabung6 = [...angka1, ...angka2, 11, ...angka3];
//console.log(gabung6);

//3. Menambahkan Array
let orang = {
    nama: "John",
    umur: 33
};

//orang.pekerjaan = "Guru";
//orang.pendidikan = "S2";

orang = {...orang, pekerjaan: "Guru", pendidikan: "S2" };
console.log(orang);

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const objGabung = {...obj1, ...obj2};
console.log(objGabung);