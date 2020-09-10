/*
    Object

*/

//const mahasiswa1 = ["John", "Doe", 31, true];

//mendeklarasi object
//1. object literals
/*const mhs1 = {
    namaDepan: 'John',
    namaBelakang: 'Doe',
    umur: 31,
    sudahLulus: true,
    alamat: {
        Jalan: "Jln. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten: "Minahasa Utara",
    },
    IPSemester: [3.05, 4.00, 3.08, 3.99],
    hitungIPK: function () {
        let total = 0;
        this.IPSemester.forEach(function (el) {
            total = total + el;
        });
        this.IPKomulatif = total / 4;
    }
};
*/
/*2. kata kunci new
const mhs2 = new Object();
mhs2.namaDepan = "Jane";
mhs2.namaBelakang = "Smith";
*/

//mengakses properti object 
//1. Dot notation
//console.log(mhs1.umur);
//2. Bracket notation
//console.log(mhs1['namaBelakang']);

//console.log(mhs1.alamat.jalan);
//console.log(mhs1.IPSemester[2]);
//mhs1.hitungIPK();
//console.log(mhs1);

//Array object (JSON)
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Smith",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function (el){
    console.log(el);
});