let coba = function(){
    return "Coba function";
}

let buah = [
    "apel", 
    "Mangga",
    "Jeruk", 
    10, 
    coba(),
(tes = ()=>"hasil return arrow function"),
function nama(){
    return "smk revit";
},
];

console.log(buah);

console.log(buah[0]);

for (let i in buah){
    console.log(buah[i]);
}

console.log(buah[5]());
console.log(buah[6]());