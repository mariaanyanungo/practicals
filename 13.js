function reverseString(text){
  
    let word="";
 for(i=text.length-1; i>=0; i--){
 
word=word +text[i];
}
console.log(word);
}
reverseString("hello");