const cursor = document.getElementById("cursor");
const tl = gsap.timeline({paused: true});
tl.to(cursor, {duration: 0.2, scale: 1.5, opacity:1});

const button = document.querySelectorAll(".btn");
const overlayTitle = document.getElementById("title");
const overlayFlag = document.getElementById("flag");

button.forEach((button)=> {
    button.addEventListener("mousemove", () => {
        cursor.textContent = button.dataset.country;
        tl.play();
    } );

    button.addEventListener("mouseleave", () => {
        cursor.textContent = "";
        tl.reverse();
    });

    button.addEventListener("click", () => {
        overlayTitle.innerText = button.innerText;
        overlayFlag.innerText = button.dataset.country;
        tl2.reversed(!tl2.reversed());
    })
})

document.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {duration: 0.2, x: e.clientX, y: e.clientY});
});

document.addEventListener("mouseout", () => {
    cursor.textContent = "";
    tl.reverse();
});


const tl2 = gsap.timeline({paused:true});
function resetInput(){
    setTimeout(()=> {
      document.querySelectorAll(".form input, .form textarea").forEach((input)=>{
        input.value = "";
      });


    }, 2000)
}

function openForm () {
    animateOpenForm();
    const closeBtn = document.getElementById("close-btn");
    const submit = document.getElementById("submit");
    closeBtn.onclick = function(e) {
        tl2.reversed(!tl2.reversed());
    }

    submit.onclick = function(e) {
        tl2.reversed(!tl2.reversed());
    };
}

openForm();

function animateOpenForm () {
    tl2.to(".overlay", 1, {
        right: "0",
        ease: "power4.inOut",
    }); 

    tl2.to(".overlay-item", 1, {
        top: 0,
        ease: "power3.inOut"
    },"-=0.8").reverse();
}