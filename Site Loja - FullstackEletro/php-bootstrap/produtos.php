<?php 
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "bd_fs";

    // Criando a conexão
    $conn = mysqli_connect($servername, $username, $password, $database);

    // Verificando a conexão
    if (!$conn) {
        die("A conexão ao Banco de Dados falhou: " . mysqli_connect_error());
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
    <script src="./js/funcoes.js"></script>
<!--head-->
<body>
<!---menu--->
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar" style="border-bottom-style: solid;border-bottom-color: #e5053a;">
        <div class="container"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navcol-1"><a class="navbar-brand" href="index.php" style="font-family: Alatsi, sans-serif;font-size: 22px;color: rgb(0,0,0);"><img style="width: 140px;margin: -14px;padding: 5px;" src="./imagens/logo.png"></a>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link active" href="produtos.php">Nosso Produtos</a></li>
                    <li class="nav-item"><a class="nav-link" href="lojas.php">Nossas Lojas</a></li>
                    <li class="nav-item"><a class="nav-link" href="contato.php">Fale Conosco</a></li>
                </ul>
            </div>
        </div>
    </nav>
<!---fim menu--->
    <main class="page catalog-page">
        <section class="d-flex clean-block clean-catalog dark" style="height: 100%;background: linear-gradient(132deg, #e5053a 0%, #f95e59 100%);">
            <div class="container">
                <div class="block-heading">
                    <h2 style="font-family: Alatsi, sans-serif;font-size: 40px;color: #ffffff;height: 40px;">Produtos</h2>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-none d-md-block">
                                <div class="filters">
                                    <div class="filter-item">
                                        <h3>Categorias</h3>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1" onclick="exibir_todos()"><label class="form-check-label" for="formCheck-1">Exibir Todos</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2" onclick="exibir_categorias('geladeiras')"><label class="form-check-label" for="formCheck-2">Geladeiras</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3" onclick="exibir_categorias('fogoes')"><label class="form-check-label" for="formCheck-3">Fogões</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4" onclick="exibir_categorias('microondas')"><label class="form-check-label" for="formCheck-4">Microondas</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6" onclick="exibir_categorias('microondas')"><label class="form-check-label" for="formCheck-4">Lavadoura de roupas</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5" onclick="exibir_categorias('lavaloucas')"><label class="form-check-label" for="formCheck-4">Lava louças</label></div>
                                    </div>
                                </div>
                            </div>
                            <!---<div class="d-md-none"><a class="btn btn-link d-md-none filter-collapse" data-toggle="collapse" aria-expanded="false" aria-controls="filters" href="#filters" role="button">Filters<i class="icon-arrow-down filter-caret"></i></a>
                                <div class="collapse"
                                    id="filters">
                                    <div class="filters">
                                        <div class="filter-item">
                                            <h3>Categorias</h3>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Exibir Todos</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Geladeiras</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-3"><label class="form-check-label" for="formCheck-3">Fogões</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-4"><label class="form-check-label" for="formCheck-4">Microondas</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-6"><label class="form-check-label" for="formCheck-4">Lavadoura de roupas</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-5"><label class="form-check-label" for="formCheck-4">Lava louças</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>--->
                        </div>
                        <div class="col-md-9">
                            <div class="products">
                                <div class="row">
<?php 
            $sql = "select * from bd_fs.tb_produto";
            $result = $conn->query($sql);
                
            if ($result->num_rows > 0) {
                while($rows = $result->fetch_assoc()){?>
            	<div class="col-12 col-md-6 col-lg-4" id="<?php echo $rows["nome_prod"]; ?>"" style="display:inline-block;">
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
                                    <!---<div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>
                                    <div class="col-12 col-md-6 col-lg-4"></div>--->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
<!---rodapé--->
<?php
    include('footer.php');    
?>
<!---rodapé--->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.10.0/baguetteBox.min.js"></script>
    <script src="assets/js/smoothproducts.min.js"></script>
    <script src="assets/js/theme.js"></script>
</body>

</html>
