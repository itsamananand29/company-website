var fieldset = document.querySelectorAll('fieldset');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.previous');
var current_fs = 0;
var next_fs = 1;
var previous_fs=-1;
const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      
fieldset[0].style.display="block";
prevBtn.style.display="none";
nextBtn.addEventListener('click',function(){
    if(validateForm()){
        for(let i =0 ; i < fieldset.length ; i++){
            fieldset[i].style.display = "none";
        }
        if(current_fs<3){
            current_fs=current_fs+1;
            console.log(current_fs);
        
            fieldset[current_fs].style.display="block";
            if(current_fs === 2){
                nextBtn.value="Submit";
            }
            if(current_fs === 3){
                nextBtn.style.display="none";
                prevBtn.style.display="none";
            }
            else{
                prevBtn.style.display="inline";
            }
        }
    }
})
prevBtn.addEventListener('click',function(){
    if(current_fs>0){
    
        for(let i =0 ; i < fieldset.length ; i++){
            fieldset[i].style.display = "none";
        }
        current_fs=current_fs-1;
        console.log(current_fs);
        if(current_fs === 0){
            prevBtn.style.display="none";
        }
        fieldset[current_fs].style.display="block";
        
    }
})

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    y = fieldset[current_fs].getElementsByTagName("input");
    for (i = 0; i < y.length; i++) {
      
      if(y[i].id === "email"){
          if(pattern.test(y[i].value) === false){
            y[i].classList.add("is-invalid");
            valid = false;
          }
          else{
            y[i].classList.remove("is-invalid");
            y[i].className += " is-valid";
          }
      }
      else if (y[i].id === "phno"){
        var phoneno = /^\d{10}$/;
        if(phoneno.test(y[i].value) === false && y[i].value.length !== 10){
            y[i].classList.add("is-invalid");
            valid = false;
        }
        else{
            y[i].classList.remove("is-invalid");
            y[i].className += " is-valid";
          }
      }
      else if (y[i].value === "") {
        y[i].classList.add("is-invalid");
        valid = false;
      }
      else{
        y[i].classList.remove("is-invalid");
        y[i].className += " is-valid";
      }
    }
    return valid; 
  }
