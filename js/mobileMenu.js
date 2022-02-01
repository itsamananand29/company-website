
function openNav() {
    if(document.getElementById("mySidenav").style.width === "330px"){
        closeNav()
    }
    else{
        document.getElementById("mySidenav").style.width = "330px";
        document.getElementById("backdrop").style.width="100vw";
    }
    
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("backdrop").style.width="0vw";
    
    }