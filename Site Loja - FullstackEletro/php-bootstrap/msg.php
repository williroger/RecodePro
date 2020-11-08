<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "bd_fs";

    // Criar a conexão
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verificar a conexão
    if (!$conn) {
        die("A conexão ao Banco de Dados falhou: " . mysqli_connect_error());
    }
    if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        $sql = "INSERT INTO comentarios (nome, email, msg) values ('$nome', '$email', '$msg')";
        $result = $conn->query($sql);
    }
?>
<?php 
                $sql = "select * from comentarios";
                $result = $conn->query($sql);
            
                if ($result->num_rows > 0) {
                    while($rows = $result->fetch_assoc()){
            ?>

            <div class="msgm">
                <p>Data: <?php echo $rows["data"]; ?></p>  
                <p>Nome: <?php echo $rows["nome"]; ?></p>
                <p>Email: <?php echo $rows["email"]; ?></p>   
                <p>Mensagem: <?php echo $rows["msg"]; ?></p>    
                <hr>
            </div>
  
            <?php  
                    }
                }else {
                    echo "Nenhum comentário ainda!";
                }
?>