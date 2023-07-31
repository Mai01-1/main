//Flip all with one button
const cards = document.querySelectorAll('.inner');
let button = document.getElementById('btn');

button.addEventListener('click', function(){
    cards.forEach(function(card){
        card.classList.toggle("isFlipped");
    });
});

//Flip each card
/*let cards = document.querySelectorAll('.inner');

[...cards].forEach((card)=>{
    card.addEventListener('click', function(){
        card.classList.toggle('isFlipped');
    });
});*/
