var sections = document.querySelectorAll("section");
var links = document.querySelectorAll("nav a");

function checkPage() {
    
    var middle = window.scrollY + window.innerHeight / 2;

    for (var i = 0; i < sections.length; i++) {
        var top = sections[i].offsetTop;
        var bottom = top + sections[i].offsetHeight;

        
        if (middle >= top && middle < bottom) {

            
            for (var j = 0; j < links.length; j++) {
                links[j].classList.remove("active");
            }

            links[i].classList.add("active");

            sections[i].classList.add("show");
        }
    }
}

window.addEventListener("scroll", checkPage);
window.addEventListener("load", checkPage);
