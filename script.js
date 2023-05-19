//  slideshow
var imagens=[
    './assets/images/background/aspersores/pexels-süleyman-şahan-2684805.jpg',
    './assets/images/background/aspersores/pexels-muhammed-zahid-bulut-12887876.jpg',
    './assets/images/background/aspersores/pexels-daria-8791457.jpg',
];
 let Index =0;
 let time =3000; 

function slideshow(){

    document.getElementById('imgs').src=imagens[Index];
    Index++;
    if(Index ==imagens.length){Index=0}
    setTimeout("slideshow()",time);
}

slideshow();


// destaque nos itens do menu
const menuItems = document.querySelectorAll('.header-menu ul li a');

menuItems.forEach(item => {
  item.addEventListener('click', function(event) {
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});


//CONTATO, VALIDAÇAO 
function validaEmail() {
    var email = document.getElementById("email");
    valueEmail = email.value;
    //valida email
    if (valueEmail.indexOf("@") == -1 || valueEmail.indexOf(".") == -1) {
        email.classList.add("error");
        return false;
    } else {
        email.classList.remove("error");
        return true
    }
}

function validaTelefone() {
    var re = new RegExp('^\([0-9]{2}\)((3[0-9]{7})|(9[0-9]{8}))$');
    var phone = document.getElementById("phone");
    valueTelefone = phone.value;
    console.log(valueTelefone)
    console.log(re.test(valueTelefone))
    return re.test(valueTelefone)
}

function validaForm() {

    if (validaEmail() && validaTelefone()) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Formulário não enviado, verifique os campos");
    }
}

//FAZER OS CARDS MUDAREM DE COR 
function changeColor(element) {
    var desiredColor = "#c9ecd4";
    element.style.backgroundColor = desiredColor;
  }