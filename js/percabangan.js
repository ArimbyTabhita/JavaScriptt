if (false){
    console.log("dijalankan jika benar");
}else{
    console.log("Dijalankan Jika salah");
}

let nilai = 100 ;
let standar = 60;
let baik = "LULUS";
let gagsl = "Tidak lulus";
let batasatas = 100;
let batasbawah= 0;
let peringatan = "nilai salah";
if (nilai <= batasatas || nilai>= batasbawah){
    if(nilai >= standar){
        console.log(baik);
      }  else {
        console.log(gagal); 
    }
    
} else {
    console.log(peringatan);
}

