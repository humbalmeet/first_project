let box = document.querySelector(".box");

box.addEventListener("mousemove", function (details) {
    let rectanglelocation = box.getBoundingClientRect();
    let innerloc = details.clientX - rectanglelocation.left;
    if (innerloc < rectanglelocation.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rectanglelocation.width / 2, 255, 0, innerloc)
        gsap.to(".box", {
            backgroundColor: `rgb(${redcolor},0,0)`
        })
    }
    else {
            let bluecolor = gsap.utils.mapRange(rectanglelocation.width / 2, rectanglelocation.width, 0,255, innerloc)
            gsap.to(".box", {
                backgroundColor: `rgb(0,0,${bluecolor})`
            })

    }
})
box.addEventListener("mouseleave",function(){
    gsap.to(box,{
        backgroundColor:"white"
    })
})
