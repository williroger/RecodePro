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
    //Enviando a mensagem - LEMBRAR Mudar local
    if(isset($_POST['nome']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $msg = $_POST['msg'];

        $sql = "INSERT INTO comentarios (nome, email, msg) values ('$nome', '$email', '$msg')";
        $result = $conn->query($sql);
    }
?>
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alatsi">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css">
    <title>Full Stack Eletro</title>
  </head>
  <body>

<div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
            <img src="./logo.png" height="50px" class="align-top" alt="">
        </a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="./index.php">DASHBOARD<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">ACESSO</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">PEDIDOS</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/">LOJA</a>
            </li>
        </ul>
    </nav>
</div>

<div class="container">
    <div class="row m-5">
        <div class="col">
            <div class="jumbotron">
                <h1 class="display-5">Itens mais comprados</h1>
                <?php 
                    $sql = "SELECT tb_pedidos.id_prod, tb_produto.descricao_prod, COUNT(tb_pedidos.id_prod) AS Qtd FROM tb_produto INNER JOIN tb_pedidos ON tb_pedidos.id_prod = tb_produto.id_prod GROUP BY id_prod HAVING COUNT(tb_pedidos.id_prod)> 1 ORDER BY COUNT(tb_pedidos.id_prod) DESC";
                    $result = $conn->query($sql);
                
                    if ($result->num_rows > 0) {
                        while($rows = $result->fetch_assoc()){
                ?>

                <div class="card m-2 p-2">
                    <p>Id Produto: <?php echo $rows["id_prod"]; ?></p>
                    <p><b>Desc. Produto:</b> <?php echo $rows["descricao_prod"]; ?></p>
                    <p>Qtd: <?php echo $rows["Qtd"]; ?></p>   
                </div>
    
                <?php  
                        }
                    }else {
                        echo "Nenhum produto com mais de 1 compra";
                    }
                ?>
            </div>
        </div>
        <div class="col">
            <h1><center>Mensagens do Site</center></h1>
            <?php 
                    $sql = "select * from comentarios";
                    $result = $conn->query($sql);
                
                    if ($result->num_rows > 0) {
                        while($rows = $result->fetch_assoc()){
                ?>

                <div class="card m-2 p-2">
                    <p style="font-weight: bold;">Data: <?php echo $rows["data"]; ?></p>  
                    <p>Nome: <?php echo $rows["nome"]; ?></p>
                    <p>Email: <?php echo $rows["email"]; ?></p>   
                    <p style="font-style: italic;">Mensagem: <?php echo $rows["msg"]; ?></p>    
                </div>
    
                <?php  
                        }
                    }else {
                        echo "Nenhum comentário ainda!";
                    }
            ?>
            <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                <a class="page-link" href="#">Next</a>
                </li>
            </ul>
            </nav>
        </div>
    </div>
</div>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  
  
  </body>
</html>
<!--head-->