window.onscroll = function() {
    myFunction();
  };
  
  function myFunction() {
    var section1 = document.getElementById("section1");
    var section2 = document.getElementById("section2");
    var section3 = document.getElementById("section3");
    var section4 = document.getElementById("section4");
    var section5 = document.getElementById("section5");
  
    var section1Position = section1.getBoundingClientRect().top;
    var section2Position = section2.getBoundingClientRect().top;
    var section3Position = section3.getBoundingClientRect().top;
    var section4Position = section4.getBoundingClientRect().top;
    var section5Position = section5.getBoundingClientRect().top;
  
    if (section1Position < window.innerHeight - 50) {
      section1.classList.add("visible");
    } else {
      section1.classList.remove("visible");
    }
  
    if (section2Position < window.innerHeight - 50) {
      section2.classList.add("visible");
    } else {
      section2.classList.remove("visible");
    }

    if (section3Position < window.innerHeight - 50) {
        section3.classList.add("visible");
      } else {
        section3.classList.remove("visible");
      }

    if (section4Position < window.innerHeight - 50) {
        section4.classList.add("visible");
      } else {
        section4.classList.remove("visible");
      }  

    if (section5Position < window.innerHeight - 50) {
        section5.classList.add("visible");
      } else {
        section5.classList.remove("visible");
      }
  }











 // SPARA FÖR ATT KOMMA IHÅG //

 // var ux = [
//   "User research",
//   "Information architecture",
//   "Interaction design",
//   "Interface design",
//   "<img src='img/Hanna portfolio stor.jpg'/>",
// ];
// console.log(ux[0]);
// console.log(ux[1]);
// console.log(ux[2]);
// console.log(ux[3]);
// console.log(ux[4]);
// console.log(ux[ux.length]);

// var arrayLength = ux.length;
// var myList = "<ul>";

// for (var i = 0; i <arrayLength; i++){
//     myList += "<li>" + ux[i] + "</li>";
// }

// myList += "</ul>";

// document.getElementById("minArraySection").innerHTML = myList;


// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     document.getElementById("slideIn").className = ".slideIn";
//   }
// }
