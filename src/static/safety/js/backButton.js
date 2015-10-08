$(document).ready(function(){
    window.frameElement.parentNode.parentNode.parentNode.firstElementChild.style.display = 'none';
});



addBackButton = function(){
    window.frameElement.parentNode.parentNode.parentNode.firstElementChild.style.display = 'inline';
}

$('a').click(function(){
    if(this.href != "")
        addBackButton();
});