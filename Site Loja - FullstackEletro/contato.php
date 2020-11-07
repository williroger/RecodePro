<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fullstack";

    // Criar a conexão
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verificar a conexão
    if (!$conn) {
        die("A conexão ao Banco de Dados falhou: " . mysqli_connect_error());
    }
    if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        $sql = "INSERT INTO comentarios (nome, msg) values ('$nome', '$msg')";
        $result = $conn->query($sql);
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UFT-8">
        <title>Contatos  - Full Stack Eletro</title>
        <link rel="stylesheet" href="./css/estilo.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="./js/funcoes.js"></script>
    </head>
    <body>
    <?php
        include('menu.php');    
    ?>
        <h2>Contatos</h2>
        <hr>
        <br>
        <center><form action="" method="post"> 
            <h4>Nome: </h4>
            <input type="text"  name="nome" style="width: 400px;" placeholder=" Escreva aqui seu nome :) ">
            <h4>Mensagem: </h4>
            <textarea name="msg" id="" cols="30" rows="10" style="width: 400px;" placeholder="Escreva aqui sua mensagem :D"></textarea>
            <br>
            <input type="submit" name=submit value="Enviar">
        </form></center>
        <br>
        <?php 
                $sql = "select * from comentarios";
                $result = $conn->query($sql);
            
                if ($result->num_rows > 0) {
                    while($rows = $result->fetch_assoc()){
            ?>

            <div class="msgm">
                <p>Data: <?php echo $rows["data"]; ?></p>  
                <p>Nome: <?php echo $rows["nome"]; ?></p>   
                <p>Mensagem: <?php echo $rows["msg"]; ?></p>    
                <hr>
            </div>
  
            <?php  
                    }
                }else {
                    echo "Nenhum comentário ainda!";
                }
            ?>
        
<!--redes e email-->
        <div class="central">
            <div class="social">
                <img src="./imagens/email.png" width="40px"><br>
                <p>contato@fullstackeletro.com</p>
            </div>
            <div class="social">
                <img src="./imagens/whatsapp.png" width="40px"><br>
                <p>+55 11 91234-56789</p>
            </div>
        </div>  
<!--fim redes e email-->
<script>
      if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
      }
</script>

        <br><br><br><br><br><br><br><br>
        <br><br>
        <?php 
        include('rodape.php')
        ?>
    </body>
</html>
