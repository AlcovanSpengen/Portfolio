//This is where portfolio functions start
filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}
                      
// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
                          }
                        }
                      }

                      
// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1); 
        }
    }
    element.className = arr1.join(" ");
}
                      
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("portfoliobuttoncontainer");
var btns = btnContainer.getElementsByClassName("buttonportfolio");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}
// autoclick
function autoclick(){
    document.getElementById('buttonclick').click();
}
function autoclick2(){
    document.getElementById('picture2').click();
}
//End of portfolio

//TRIAL SCROLL active nav
// Scroll to a certain element
$("nav").find("#part1").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#intro');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part2").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#about');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part3").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#services');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part4").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#testimonials');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part5").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#mywork');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part6").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#customers');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
$("nav").find("#part7").click(function(e) {
    console.log('hallo');
    e.preventDefault();
    var section = $('#contact');
    console.log(section);
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});

// This is the Image gallery
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}