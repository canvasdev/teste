//veiculos form

nomeLoganExpression = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Clio Authentique\" /></div>";
nomeDuster = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Clio Expression\" /></div>";
nomeLoganAuthentique = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Logan\" /></div>";
nomeClio = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Sandero\" /></div>";
nomeFluence = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Fluence\" /></div>";
nomeSanderoExpression = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Novo Sandero\" /></div>";
nomeSanderoStepway = "<div id=\"carro\"><input type=\"hidden\" name=\"veiculo\" id=\"veiculo\" value=\"Fluence\" /></div>";

//função para selecionar o veiculo escolhido

function mostraVeiculo(el){

    if(el.id == "1"){

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


    if(el.id == "2"){

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


    if(el.id == "3"){

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


    if(el.id == "4"){

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


    if(el.id == "5"){

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



    //  ========== novo veiculo ===============


    if(el.id == "6"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-5300px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-6').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional6').css({
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


    if(el.id == "7"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-6250px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-7').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional7').css({
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


    //  ========== novo veiculo ===============


    if(el.id == "8"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-7220px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-8').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional8').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeSanderoExpression).appendTo(".veiculo-form");
    }



    //  ========== novo veiculo ===============


    if(el.id == "9"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-8170px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-9').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional9').css({
            'display' : 'block'
        });
        

        setTimeout(function() {
            $('.container-ofertas-secundarias').css({
                'top': '630px'
            });

        }, 900); 

// altera o formulario para o veiculo selecionado
        $(nomeSanderoExpression).appendTo(".veiculo-form");
    }



    //  ========== novo veiculo ===============


    if(el.id == "10"){

//reseta o formulario        

   $('#carro').remove();  

//posiciona a pagina

$("html, body").animate({
        scrollTop: 80
    }, "slow");   


//move container para o veiculo selecionado

        setTimeout(function() {
            $('#container-blocos').css({
                'margin-left': '-9150px'
            });

        }, 0);

//mostra a oferta correspondente


          $('.veiculo-1 , .veiculo-2 , .veiculo-3 , .veiculo-4 , .veiculo-5 , .veiculo-6 , .veiculo-7 , .veiculo-8 , .veiculo-9 , .veiculo-10').css({
          'top' : '700px'
         });   


        setTimeout(function() {
            $('.veiculo-10').css({
                'top': '0px'
            });

        }, 400);  

//mostra os opcionais correspondentes e infos correspondentes - mostra o juridico correspondente
        

        $('.opcional1 , .opcional2 , .opcional3 , .opcional4 , .opcional5 , .opcional6 , .opcional7 , .opcional8 , .opcional9 , .opcional10   ').css({
            'display' : 'none'
        });


        $('.opcional10').css({
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


//Funcao para voltar a lista de veiculos

function outrosVeiculos(){

            $('.container-ofertas-secundarias').css({
                'top': '380px'
            });
}


//função para movimentar o slider de carros


function moveSlider(el){

        if(el.id == "next"){

            $('.container-veiculos').css({
                'left' : '-499px'
            });
            $('.controle-rigth-slider').css({
                'opacity' :'0.2'
            });

            $('.controle-left-slider').css({
            'opacity' :'1.0'
            });

        }else{

           $('.container-veiculos').css({
                'left' : '455px'
            }); 

            $('.controle-left-slider').css({
            'opacity' :'0.2'
            });

           $('.controle-rigth-slider').css({
            'opacity' : '1.0'
            });
        }

}


//Validar os formulário
function validar1() {
	var valido = false;
	with(document.form1) {
		if (nome.value.length == 0) {
			valido1 = false;
			alertify.alert('Por favor, preencha o campo nome para que possamos entrar em contato com você.');
		} else if (email.value.length == 0) {
			valido1 = false;
			alertify.alert('Por favor, preencha o campo email para que possamos entrar em contato com você.');
		} else if (telefone.value.length == 0) {
			valido1 = false;
			alertify.alert('Por favor, preencha o campo DDD + Telefone para que possamos entrar em contato com você.');
		} else {
			valido1 = true;
			submit();
		}
		return valido1;
	}
}


(function($) {
	$(function() {
		$('.mask-fone').mask('(99) 9999-9999'); //telefone
	});
})(jQuery);