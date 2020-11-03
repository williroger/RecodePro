<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UFT-8">
        <title>Nossas Lojas - Full Stack Eletro</title>
        <link rel="stylesheet" href="./css/estilo.css">
    </head>
    <body>
        <!--menu-->
        <?php
        include('menu.php');    
        ?> 
        <!--fim do menu-->
        <h2 class="titulos">Nossas Lojas</h2>
        <hr>
        <div class="lojas">
            <h3 class="titulos_lojas">Rio de Janeiro</h3>
            <p>Avenida Presidente Tal</p>
            <p>10&ordm; andar</p>
            <p>Centro</p>
            <p>(21) 1234-5678</p>
        </div>  
        <div class="lojas">
            <h3 class="titulos_lojas">S&atildeo Paulo</h3>
            <p>Avenida Presidente Tal</p>
            <p>05&ordm; andar</p>
            <p>Centro</p>
            <p>(11) 1234-5678</p>
        </div>
        <div class="lojas">
            <h3 class="titulos_lojas">Bel&eacutem</h3>
            <p>Avenida Presidente Tal</p>
            <p>3&ordm; andar</p>
            <p>Centro</p>
            <p>(91) 1234-5678</p>
        </div>
       <!--rodapé-->
    <?php
        include('rodape.php');    
    ?>
<!--fim do rodapé-->
    </body>
</html>