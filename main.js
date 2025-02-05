

// console.log(knopka);

// knopka.addEventListener("click", function() {
//     console.log("Button Bosildi");
//     const newTag = document.createElement("h1");

//     newTag.textContent = "Bosildi";
//     document.body.appendChild(newTag);
// })
// const userName = prompt("Ismgizni kiriting");

// const newTag = document.createElement("h1");

//     newTag.textContent = userName;
//     document.body.appendChild(newTag);

const from = document.getElementById("form")
const input = document.getElementById("input");
const btnMinus = document.getElementById("minus")
const btnPlyus = document.getElementById("plyus")
const soz = document.getElementById("text")

let count = 0;

from.addEventListener("submit", function(refreshBoma){
    refreshBoma.preventDefault();

    const inputningQiymati = Number(input.value);

    console.log(typeof inputningQiymati);

     count = inputningQiymati

    soz.textContent = inputningQiymati;

    input.value = "";

})

btnPlyus.addEventListener("click", function() {
    count++;
    console.log(count);
    soz.textContent = count;
})

btnMinus.addEventListener("click", function() {
    count--;
    console.log(count);
    soz.textContent = count;
})




// from.addEventListener("submit" , (e) => {
//     e.preventDefault();


// })