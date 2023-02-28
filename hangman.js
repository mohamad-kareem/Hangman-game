let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let letter_block=document.querySelector(".letters");

letters.forEach(letter => {

    let span =document.createElement("span");
    let the_letter=document.createTextNode(letter);
    console.log(the_letter)
    span.appendChild(the_letter);
    span.className=("letter_box");
    letter_block.appendChild(span);
});

const words={
    animal:["lion","tiger","dog","cat"],
    movies:["avatar","inception","RUN","TROY"],
    series:["peaky blinders","breaking bad","the 100","prison break"]
}
let cate=Object.keys(words);
console.log(cate)
