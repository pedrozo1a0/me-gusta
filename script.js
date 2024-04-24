
let cantLikes= 9;
let count=13;
let lik=9;
function aumentarLikes(element){
    let elementSpan= element.previousElementSibling;
    cantLikes++;
    elementSpan.textContent= cantLikes +" like(s)";

}
function aumentarLikes13(element){
    let elementSpan= element.previousElementSibling;
    count++;
    elementSpan.textContent= count +" like(s)";

}

function aumentarLikes92(element){
    let elementSpan= element.previousElementSibling;
    lik++;
    elementSpan.textContent= lik +" like(s)";
}

