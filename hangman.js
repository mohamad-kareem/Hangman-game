let letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

let letter_block=document.querySelector(".letters");

letters.forEach(letter => {

    let span =document.createElement("span");
    let the_letter=document.createTextNode(letter);
    
    span.appendChild(the_letter);
    span.className=("letter_box");
    letter_block.appendChild(span);
});

const words={
    animal:["lion","tiger","dog","cat"],
    movies:["avatar","inception","rUN","troy"],
    cars:["mercedes","bmw","volvo","nissan"]
}
let all_cat=Object.keys(words);

let random=Math.floor(Math.random()*all_cat.length)
let random_cat=all_cat[random]
let in_cat=words[random_cat]
let index_in=Math.floor(Math.random()*in_cat.length)
let random_in_cat=in_cat[index_in]
console.log(in_cat[index_in])
document.querySelector(".game-info .category span").innerHTML=random_cat

let letter_guess_input=document.querySelector(".letter-input")
let input_letters=Array.from(random_in_cat)
input_letters.forEach(letter=>{
    let empty_span=document.createElement("span")
    letter_guess_input.appendChild(empty_span)

});
let choosespan=document.querySelectorAll(".letter-input span")


document.addEventListener("click",(e) => {
    let thestatus=false;
    if (e.target.className ==="letter_box"){
        e.target.classList.add("clicked");
       let after_clicked=e.target.innerHTML;

    

input_letters.forEach((storedletter,index) => {
 if (after_clicked==storedletter){
        thestatus=true
    choosespan.forEach((span,spanindex)=>{
        if(index===spanindex){
            span.innerHTML=after_clicked;
        }
    });
    

 }

})
    }
})