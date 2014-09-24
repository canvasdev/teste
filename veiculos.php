<?php
$xml = simplexml_load_file('lista.xml');
foreach($xml->veiculo as $veiculo){
echo ' 

            <div class="container-veiculo-oferta" id="'.$veiculo->id.'" onClick="mostraVeiculo(this)">
                <div class="nome-veiculo-oferta">'.$veiculo->nome.'</div>
                <div class="foto-veiculo-oferta"><img src="images/'.$veiculo->foto.'" alt="'.$veiculo->nome.'" width="190"></div>
                <div class="btn-oferta">
                    <div class="btn-oferta-ornamento"></div>
                    <div class="btn-oferta-txt">VER OFERTA</div>
                </div>
                <div class="margem-direita"></div>
            </div>
  ';

}

?>