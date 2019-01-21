var man = document.createElement("img");
man.setAttribute('src', "images/landing/man1.png");
man.setAttribute('onmouseover', "mouseOverMan(this)");
man.setAttribute('onmouseout', "mouseOutMan(this)");
man.setAttribute('ondblclick', "doubleClick()");
man.setAttribute('class', "draggable background");
man.setAttribute('id', "man");
man.setAttribute('style', "position: fixed");
document.body.appendChild(man);

function mouseOverText(p){
	document.getElementById("text").innerHTML = "waa";
}
function mouseOutText(p){
    document.getElementById("text").innerHTML = "sup";
}
function mouseOverMan(img){
	img.src = "images/landing/man2.png"
}
function mouseOutMan(img){
	img.src = "images/landing/man1.png"
}
function doubleClick(){
	window.location.href = "index.html";
}

$(function() {
    $( ".draggable" ).draggable();
  });
$('.foreground').mousedown(function(ev) {
    $('.background').trigger(ev);
});
$('.foreground').dblclick(function(ev) {
    $('.background').trigger(ev);
});
$('.foreground').mouseover(function(ev) {
    $('.background').trigger(ev);
});
$('.foreground').mouseout(function(ev) {
    $('.background').trigger(ev);
});
$('.foreground').click(function(ev) {
    $('.background').scroll();
});