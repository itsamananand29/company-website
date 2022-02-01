// code for accordian
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    // console.log(acc[i])
    acc[i].onclick = function() {
        if(this.classList.value === "accordion"){
            hideAll()
            this.classList.toggle("active");
            // console.log(this.classList.value)
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
            panel.style.display = "block";
            }
        }
        else{
            hideAll()
        }
    }
}

function hideAll() {
    for (i = 0; i < acc.length; i++) {
        // console.log(acc[i].classList)
        acc[i].classList.toggle("active", false);
        acc[i].nextElementSibling.style.display = "none";
    }
}