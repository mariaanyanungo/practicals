function countVowels(text){
      let count=0;
      let vows="aeiouAEIOU";
    for(i=0; i<=text.length-1; i++){
        if(vows.includes(text[i])){
            count++;
    }
      }
 console.log(count); 
}
countVowels("rice");