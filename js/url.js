nomeLoganExpression = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Clio Authentique\" /></div>";
nomeDuster = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Clio Expression\" /></div>";
nomeLoganAuthentique = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Logan\" /></div>";
nomeClio = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Sandero\" /></div>";
nomeFluence = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Fluence\" /></div>";
nomeSanderoExpression = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Sandero\" /></div>";
nomeSanderoStepway = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Fluence\" /></div>";



$(document).ready(function() {

if (location.hash == "#clio-authentique") {
       url = "2"
} if (location.hash == "#clio-expression") {
       url = "6"
} if (location.hash == "#logan") {
       url = "7"
} if (location.hash == "#sandero") {
       url = "9"
} 

if (location.hash == "#fluence") {
       url = "3"
} 

veiculoUrl();

});


function veiculoUrl() {


     //  ========== novo veiculo ===============


    if(url == "0"){

//reseta o formulario        

   $('#carro').remove();  
 


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-2400px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-3').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });

        $('.opcional3').css({
            'display' : 'block'
        });



// altera o formulario para o veiculo selecionado
        $(nomeFluence).appendTo(".veiculo-form");
    }


//  ========== novo veiculo ===============


    if(url == "2"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-480px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-1').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional1').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeLoganExpression).appendTo(".veiculo-form");
    }


  //  ========== novo veiculo ===============


    if(url == "6"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-1440px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-2').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional2').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeDuster).appendTo(".veiculo-form");
    }

    //  ========== novo veiculo ===============


    if(url == "7"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-2400px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-3').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional3').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeLoganAuthentique).appendTo(".veiculo-form");
    }


 //  ========== novo veiculo ===============


    if(url == "9"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-3400px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-4').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional4').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeClio).appendTo(".veiculo-form");
    }

    //  ========== novo veiculo ===============


    if(url == "3"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-4330px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-5').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional5').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeFluence).appendTo(".veiculo-form");
    }


}