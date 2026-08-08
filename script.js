const cat = document.querySelector(".cat-pic");

let counts = 0;

cat.addEventListener("click", function() {

    counts ++;


    cat.style.width = cat.offsetWidth + 50 + "px";
    cat.style.height = cat.offsetHeight + 50 + "px";

    if (counts === 5) {
        cat.src = "cat-two.png";
    }

    if (counts === 10) {
        cat.src = "cat-three.webp"
    }

});