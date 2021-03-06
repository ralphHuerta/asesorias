$(document).ready(function(){
    function muestraLista(m1){
        $(this).css("disoplay" , "block");
        console.log("Muestra Lista");
    };
    function oculataLista(m1){
        $(this).css("display", "none");
        console.log("ocultad lista")
    };

    var lista = $(".btn-menu");
    var menu = $(".menu-listas1");
    
    
    console.log(lista);
    lista.click(function(){
        muestraLista(menu);
    });
    //lista.hover(oculataLista(menu), muestraLista(menu));
});