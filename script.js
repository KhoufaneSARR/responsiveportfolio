
//animation page apropos


const txtAnim = document.querySelector('h2');

new Typewriter(txtAnim, {
    //deleteSpeed:20
    loop:true,
})
.typeString('Je suis Khoufane Sarr')
//faire apparaitre le texte
.pauseFor(300)
.deleteChars(21)
//supprimer le texte
.typeString(' Agile ')
.pause(600)
.deleteChars(7)
.typeString(' Motivé ')
.pause(900)
.deleteChars(8)
.typeString('Perfectionniste')
.pause(1000)
.deleteChars('15')
.typeString('Créatif')
.start()
$(document).ready(function(){
    $('#bars').click(function(){
    $('ul').toggleClass('show')
     
    });   

});