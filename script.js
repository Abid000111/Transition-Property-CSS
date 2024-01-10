let box = document.querySelector(".box");
// console.log(box);

let turn = 0;
box.addEventListener("click", () => {
    if (turn === 0) {
        turn = 1;
        box.style.backgroundColor = "blue";
        box.classList.add("translate");
    } else {
        turn = 0;
        box.style.backgroundColor = "aquamarine";
        box.classList.remove("translate");
    }
})