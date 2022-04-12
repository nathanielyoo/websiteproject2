let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-buttons .bx-x-circle");
let navBtns = document.querySelector(".nav-buttons");

menuOpenBtn.addEventListener("click", ()=>{
    navBtns.style.left="0";
});

menuCloseBtn.addEventListener("click", ()=>{
    navBtns.style.left="-100%";
});

new TypeIt(".grip-quote", {
    speed: 60,
    waitUntilVisible: true,
})

.type('"Good', {delay: 500})
.pause(250)
.type(" gof")
.pause(200)
.type(" begins")
.move(-8)
.type("l")
.move(null, {to:"END"})
.type(" wiht")
.pause(200)
.type(" a")
.pause(200)
.delete(4)
.type("th")
.pause(100)
.type(" a")
.pause(200)
.type(" good")
.pause(150)
.type(' grip."')
.break({delay: 500})
.break({delay: 500})
.type("<em>– Ben Hogan</em>")
.go();