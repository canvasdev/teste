<!DOCTYPE html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Vitrine de ofertas Renault - Minas France</title>
        <meta name="description" content="">
        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="css/alertify.core.css" rel="stylesheet" type="text/css" />
        <link href="css/alertify.default.css" rel="stylesheet" type="text/css" />
        <script src="js/vendor/modernizr-2.6.2.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="js/url.js"></script>
        <script src="js/alertify.js" type="text/javascript"></script>
        <script language="javascript" src="js/jquery.maskedinput-1.3.js"></script>
        <script src="js/placeholders.min.js"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-42379670-21', 'auto');
  ga('require', 'displayfeatures');
  ga('send', 'pageview');
</script>

    </head>
    <body>
<div class="chat-btn"><a href="http://www.grupoocp.com.br/chat/france/client.php?locale=pt-br" target="_blank" onclick="if(navigator.userAgent.toLowerCase().indexOf('opera') != -1 &amp;&amp; window.event.preventDefault) window.event.preventDefault();this.newWindow = window.open('http://www.grupoocp.com.br/chat/france/client.php?locale=pt-br&amp;url='+escape(document.location.href)+'&amp;referrer='+escape(document.referrer), 'webim', 'toolbar=0,scrollbars=0,location=0,status=1,menubar=0,width=640,height=480,resizable=1');this.newWindow.focus();this.newWindow.opener=window;return false;"><img src="http://www.grupoocp.com.br/chat/brfrance/b.php?i=webim&amp;lang=pt-br" border="0" alt=""/></a></div>
        

        <div class="top-bar"></div>
        <div class="logo-top">
            <div class="logo-client"></div>
            <div class="line-break"></div>
            <div class="text-logo">VITRINE DE OFERTAS</div>
        </div>

        <div id="car-roullet">
           <?
           $ofertas = simplexml_load_file('lista.xml'); 
           foreach ($ofertas->veiculo as $oferta) {
             echo '
                <div class="selo-veiculo veiculo-'.$oferta->id.' transition-1s">

                    <div class="oferta-condicao transition-5ms">'.$oferta->condicao.'</div>
                    <div class="valor-oferta-condicao transition-5ms">'.$oferta->valor.'</div>
                    <div class="selo-veiculo-img transition-5ms"><img src="images/'.$oferta->selo.'" width="160px"></div>
                    <!--<div class="ver-outras-ofertas" onClick="outrasOfertas()">VER OUTRAS OFERTAS</div>-->
                    
                </div>
            ';

              }
           ?>
            <div class="bg-form">
                <div class="arrow-form"></div>
                <div class="tarja-chamada">
                <?
                    $veiculosform = simplexml_load_file('lista.xml');
                    foreach($veiculosform as $nomeform ){

                     echo '<div class="chamada-form opcional'.$nomeform->id.' transition-5ms">PREENCHA O FORMULÁRIO PARA SABER MAIS SOBRE O '.$nomeform->nome.'</div>';

                    };
                ?>
                
                </div>


  <form onSubmit="return validar1();"  id="form1" name="form1" method="post" action="http://www.grupoocp.com.br/azzurra/">
            <input type="hidden" name="origem" id="origem"  value="Hotsite" />
            <div class="veiculo-form"></div>
            <input type="hidden" name="campanha" id="campanha"  value="Vitrine de Ofertas Renault" />
            <input type="hidden" name="opcao" id="opcao"  value="A" />
            <input type="hidden" name="linkResposta" id="linkResposta" value="http://vitrinedeofertasrenault.com/contatoenviado.html" />
            <div id="selectcon" class="styled-select">
            <select name="codempresa" id="codempresa" name="codempresa" style="width:250px; color:#848484;">
             <option value="81">Escolha uma concessionária:</option>
             <option value="81">Minas France Savassi</option>
             <option value="83">Minas France Pampulha</option>
            </select></div>
            <div class="inputname"><input  type="text" name="nome" id="nome" placeholder="Qual é o seu nome?" style="width:200px; height:15px;"  /></div>
            <div class="inputemail"><input   type="text" name="email" id="email" placeholder="Qual é o seu email?"  style="width:200px; height:15px;"  /></div>
            <div class="inputtel"><input   type="text" name="telefone" class="mask-fone" placeholder="Qual é o seu telefone?"  id="telefone" style="width:200px; height:15px;"/></div>
            <div class="inputtxtarea"><textarea rows="4" style="width:200px;" placeholder="Deseja deixar uma mensagem?"  name="mensagem" id="mensagem"></textarea> </div>
            <div class="inputall"><input name="charset" type="hidden" value="iso-8859-1" />
            <input type="submit" name="enviar" value="Quero mais informações!" class="btn" /></div> 
 </form>
            </div>

            <div id="container-blocos" class="transition-1s">
             <? 
                $banners = simplexml_load_file('lista.xml');
                foreach ($banners as $banner) {
                echo '<div class="bloco-veiculo"><img src="images/'.$banner->banner.'"></div>';
                  
                };
             ?>
            </div>
        </div>

        <div class="subtitle">ESCOLHA UM VEÍCULO ABAIXO E COMPROVE AS MELHORES OPORTUNIDADES</div>

        <div class="container-ofertas-secundarias transition-5ms">
            <div class="limite-ofertas">
                <div class="outros-veiculos" onClick="outrosVeiculos()">VER OUTROS VEÍCULOS</div>

                <div class="box-outras-ofertas">
                  <div class="title-box-outras-ofertas">SOBRE O VEÍCULO</div>
                  <div class="sobre-veiculo">
                    <?
                        $sobre = simplexml_load_file('lista.xml');
                        foreach ($sobre as $info) {

                        echo '<div class="opcional'.$info->id.'">'.$info->sobre.'</div>';
                         
                        };

                    ?> 
                  </div>
                  
              </div>

                <div class="box-outras-ofertas">
                    <div class="title-box-outras-ofertas">OPCIONAIS</div>

                    <? 
                    $opcionais = simplexml_load_file('lista.xml'); 
                    foreach ($opcionais->veiculo as $opcional) {
                       
                       echo '
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[0].'</div>
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[1].'</div>
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[2].'</div>
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[3].'</div>
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[4].'</div>
                       <div class="op opcional'.$opcional->id.'"><div class="marcador"></div>'.$opcional->opcional->op[5].'</div>

                       ';

                    }
                    ?>
                    

                </div>

            </div>
        </div>
             <div class="controle-left-slider" id="back" onClick="moveSlider(this)"></div>
             <div class="controle-rigth-slider" id="next" onClick="moveSlider(this)"></div>
             <div class="container-geral-veiculos">
                <div class="container-veiculos transition-1s">
                  <div class="home">
                    <? include('veiculos.php'); ?>  
                  </div>   
                </div>
              </div>
        <div class="boxes">

            <div class="box-interno">
                <div class="title-box">VANTAGENS DA VITRINE DE OFERTAS</div>
                <div class="conteudo-box">
                 
Aqui na Minas France você tem uma verdadeira exposição de ofertas.
Acomode-se e escolha a sua favorita.
 
Além dos melhores preços a um clique de distância você também encontrará:
Preço de nota fiscal de fábrica
Cortesia exclusiva em Dotz
Parcelamentos que cabem no seu bolso  
Diversos opcionais como direção hidráulica, trio elétrico, som original e pintura metálica, entre outros
Além do mais, os veículos Renault são destaque na edição “Melhor Compra de 2014” da Revista 4 Rodas. O Novo Logan e o Duster foram eleitos como os melhores nas suas categorias.

</div>
            </div>


            <div class="box-interno" id="box-regulamento">
                <div class="title-box">REGULAMENTO</div>
                <div class="conteudo-box-regulamento">
              <? 
              foreach ($xml->veiculo as $id) {
              echo'<div class="opcional'.$id->id.'">'.$id->juridico.'</div>';
              }
              ?>
                </div>
            </div>
        </div>

        <div class="rodape">
            <!-- <div class="logo-rodape"></div> -->
        </div>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-53948312-1', 'auto');
  ga('send', 'pageview');

</script>

    </body>
</html>
