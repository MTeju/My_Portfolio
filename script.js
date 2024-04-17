var tl = gsap.timeline();

tl.from(".container .contents .top-container .navbar a i",{
    opacity: 0,
    delay: 3,
    y: -10,
    stagger: 0.2
})

tl.from(".container .left-container ",{
    x: -300
})

tl.from(".container .bottom-container",{
    opacity: 0,
    duration: 0.5
})

tl.from(".container .bottom-container #homes",{
    opacity: 0,
    duration: 0.8,
    y: 20
})


tl.from(".container .bottom-container #homes .name-subtext .name",{
    opacity: 0,
    scale: 0.2,
    stagger: 0.3
})

tl.from(".container .bottom-container #homes .name-subtext .sub-text",{
    opacity: 0,
    scale: 0.2,
    stagger: 0.3
})

tl.from(".container .bottom-container #abouts",{
    opacity: 0,
    y: 20,
    duration: 1
})

tl.from(".container .bottom-container #ido",{
    opacity: 0,
    y: 20,
    duration: 1
})


tl.from(".container .bottom-container #education",{
    opacity: 0,
    y: 20,
    duration: 1,
})


tl.from(".container .bottom-container #skills",{
    opacity: 0,
    y: 20,
    duration: 1
})

tl.from(".container .bottom-container #portfolios",{
    opacity: 0,
    y: 20,
    duration: 1
})

tl.from(".container .bottom-container #contacts",{
    opacity: 0,
    y: 20,
    duration: 1
})

tl.from(".container .bottom-container #footers",{
    opacity: 0,
    y: 20,
    duration: 1
})






const txts = document.querySelector(".animated-text").children;
        txtsLen = txts.length;
        let index = 0;
        var Delay = 5650;

        function animateText() {
            for (let i = 0; i < txtsLen; i++) {
                txts[i].classList.remove("text-in");
            }
            txts[index].classList.add("text-in");
            if (index == txtsLen - 1) {
                index = 0;
            } else {
                index++;
            }
            setTimeout(animateText, 1300);
        }

        function switchContainers() {
            var container1 = document.querySelector(".icontainer");
            var container2 = document.querySelector(".scontainer");

            container1.style.display = "block";

            setTimeout(function() {

                container1.style.display = "none"; 
                container2.style.display = "block";

            }, Delay - 2000);

            animateText();
        }
        window.onload = switchContainers;