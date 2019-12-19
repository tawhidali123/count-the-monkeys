function monkeyCount(n) {
 let number = n;
 let emptyArr = [];
 
 for(let i=0; i < n; i++){
   console.log(i)
   emptyArr.push(i+1)
 }
 
 return emptyArr
}