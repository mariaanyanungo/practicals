function findLargest(array){
let max = array[0];
     if (array.length===0){
            return array;
        }
    for(let i of array){
    
    if(max<array[i]){
           max=array[i];
        }     
} 
 console.log(max);
}
findLargest([3, 17, 8, 22, 5]);
