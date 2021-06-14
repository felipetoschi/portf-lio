function abrirmenu(){
    document.getElementById('imghamburguer').style.opacity='0';
    document.getElementById('menulateral').style.right='0rem';
    document.getElementById('imgbotao2').style.opacity="1"
}

function botaofecharmenu(){
    document.getElementById('menulateral').style.right='-20rem';
    document.getElementById('imghamburguer').style.opacity='1';
    document.getElementById('imghamburguer').style.transition="6s"
    document.getElementById('imgbotao2').style.opacity="0"
    document.getElementById('imgbotao2').style.transition="2s"
}

function fecharmenu(){
    document.getElementById('menulateral').style.right='-20rem';
    document.getElementById('imghamburguer').style.opacity='1';
    document.getElementById('imgbotao2').style.opacity="0"
}