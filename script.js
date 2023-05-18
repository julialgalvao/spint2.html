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
