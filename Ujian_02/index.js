// =============== [Bagian 1] ==================
//Nomor 1

const calculateAge = (birthYear) => {
	return 2019 - birthYear;
}
 
const yearUntilRetirement = (object) => {
	let age = calculateAge(object.birthYear);
	let retirement = 60 - age;
   
	if(retirement > 0){
    	console.log(`${object.firstName} retires in ${retirement} years`);
	} else {
    	console.log(`${object.firstName} is already retired.`);
	}
}

yearUntilRetirement({birthYear: 1987, firstName: 'John'});

//Nomor 2

const addNumber = (a, b, c, d, e, f, g) => {
    let numbers = [a, b, c, d, e, f, g];
    let sum = 0;
    let i = numbers.map(item=>{
      return sum+=item
    })
    console.log(i);
}

addNumber(1,2,3,4,5,6,7)

//Nomor 3

let phi = 3.14;
let power = 2;
let radius = 0;
 
const calculateArea = (obj) => {
  return phi * Math.pow(obj.radius, obj.power);
};
 
radius = 21;
let area21 = calculateArea({radius: radius, power: 2 });
 
radius = 7;
let area7 = calculateArea({radius: radius, power: 2 });
 
console.log(`area with 21 radius: ${area21} and area with 7 radius: area7`);

//Nomor 4

const makeAjaxRequest = (url, method) => {
    if(!method){
           method = `GET`
    }
    console.log(`${url}, ${method}`);
}

makeAjaxRequest(`www.google.com`);


// ============== [Bagian 2] ==================
// Nomor 1
const warnaKesukaan = (warna='putih') => {
    return console.log(`Warna kesukaan saya adalah ${warna}`)
    }
    
warnaKesukaan('ungu');

// Nomor 2
let namaBuah1 = ['apel', ' mangga'];
let namaBuah2 = ['sirsak', 'semangka'];

let semuaNamaBuah = [...namaBuah1,...namaBuah2];

console.log(semuaNamaBuah);
