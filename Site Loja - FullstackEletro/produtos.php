<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fullstack";

    // Criando a conexão
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verificando a conexão
    if (!$conn) {
        die("A conexão ao Banco de Dados falhou: " . mysqli_connect_error());
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UFT-8">
        <title>Produtos - Full Stack Eletro</title>
        <link rel="stylesheet" href="./css/estilo.css">
        <script src="./js/funcoes.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </head>
    <body>
    <?php
        include('menu.php');    
    ?>
        <header class="titulos">
            <h1>PRODUTOS</h1>
        </header>
        <hr>
    <div class="central"> <!--tudo do meio-->
<!--barra lateral-->     
        <div class="barra_lateral">
                    <h3>Categorias</h3>
                    <ul>
                        <li onclick="exibir_todos()">Exibir Todos (12)</li>
                        <li onclick="exibir_categorias('geladeiras')">Geladeiras (3)</li>
                        <li onclick="exibir_categorias('fogoes')">Fogões (2)</li>
                        <li onclick="exibir_categorias('microondas')">Microondas (3)</li>
                        <li onclick="exibir_categorias('lavadoura')">Lavadoura de roupas (2)</li>
                        <li onclick="exibir_categorias('lavaloucas')">Lava louças (2)</li>
                    </ul>
        </div>
<!--fim da barra lateral-->
<!--produtos-->
        <div class="produtos">
        <?php 
            $sql = "select * from fullstack.tb_produto";
            $result = $conn->query($sql);
                
            if ($result->num_rows > 0) {
                while($rows = $result->fetch_assoc()){
        ?>

            <div class="box_dos_produtos" id="<?php echo $rows["nome_prod"]; ?>"" style="display:inline-block;">
                <img src="<?php echo $rows["img_prod"];?>" width="120px" onclick="destaque(this)">
                <br>
                <p><?php echo $rows["descricao_prod"];?> </p>
                <p id="preco_prod"><?php echo $rows["preco_prod"];?></p> <!--criar coluna de porcentagem de desconto futuramente-->
            </div>

            <?php  
            }
            }else {
            echo "Nenhum produto cadastrado!";
            }
        ?>   
        </div>
<!--fim da barra lateral-->    
    </div>
<!--rodapé-->
<?php 
     include('rodape.php')
?>
<!--fim do rodapé-->
    </body>
</html>
