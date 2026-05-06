function findChecker(arr,target){
   for(i=0; i<=arr.length-1; i++){
    if(arr[i]===target){
        console.log("Found it!")
        break
    }else{
        console.log("Not Found")
    }
   
   }
       
    }findChecker(["Good","Food","Nice","gadget","Clothes"],"Nice")

