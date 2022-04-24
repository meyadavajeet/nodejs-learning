const arr = [3,2,4,5,6,7,4,3,35,32435,254254,2,425,3425,234,5243,5234,5234];
console.log(arr);

//filter already use loop because when we traves array we need to go through loop

let filteredResults = arr.filter((item)=>{
   // return item<4
   return item ===4
});
console.log(filteredResults);