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
    if(isset($_POST['nome']) && isset($_POST['email']) && isset($_POST['msg'])){
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $msg = $_POST['msg'];

        $sql = "INSERT INTO comentarios (nome, email, msg) values ('$nome', '$email', '$msg')";
        $result = $conn->query($sql);
    }
?>
<!DOCTYPE html>
<html>
<!--head-->
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Full Stack Eletro</title>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700,700i,600,600i">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alatsi">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.css">
</head>
<!--head-->
<body>
<!---menu--->
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style="border-bottom-style: solid;border-bottom-color: #e5053a;">
        <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1"><a class="navbar-brand" href="index.php" style="font-family: Alatsi, sans-serif;font-size: 22px;color: rgb(0,0,0);"><img style="width: 140px;margin: -14px;padding: 5px;" src="./imagens/logo.png"></a>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="produtos.php">Nosso Produtos</a></li>
                    <li class="nav-item"><a class="nav-link" href="lojas.php">Nossas Lojas</a></li>
                    <li class="nav-item"><a class="nav-link active" href="contato.php">Fale Conosco</a></li>
                </ul>
            </div>
        </div>
    </nav>
<!---fim menu--->

    <main class="page contact-us-page" style="height: 90%;">
        <section class="d-flex clean-block clean-form dark" style="height: 100%;">
            <div class="container">
                <div class="block-heading">
                <h2 style="font-family: Alatsi, sans-serif;color: #e5053a;border-top-style: none;opacity: 1;height: 40px;font-size: 40px;">Fale conosco! :)</h2>
                </div>
                <form style="border-top-color: #e5053a;" action="" method="post">
                    <div class="form-group"><label>Nome</label><input class="form-control" type="text" name="nome"></div>
                    <div class="form-group"><label>E-mail</label><input class="form-control" type="text" name="email"></div>
                    <div class="form-group"><label>Mensagem</label><textarea class="form-control" name="msg" id=""></textarea></div>
                    <div class="form-group"><button class="btn btn-primary btn-block" type="submit" name=submit style="background: #e5053a;font-family: Alatsi, sans-serif;">Enviar</button></div>
                </form>
            </div>
        </section>
    </main>
<script>
      if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
      }
</script>
<!---rodapé--->
<?php
    include('footer.php');    
?>
<!---fim rodapé--->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="assets/js/smoothproducts.min.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>