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
                    <li class="nav-item"><a class="nav-link active" href="lojas.php">Nossas Lojas</a></li>
                    <li class="nav-item"><a class="nav-link" href="contato.php">Fale Conosco</a></li>
                </ul>
            </div>
        </div>
    </nav>
<!---menu--->
    <main class="page service-page" style="height: 90%;">
        <section class="clean-block clean-services dark" style="height: 100%;">
            <div class="container">
                <div class="block-heading">
                    <h2 style="color: #e5053a;font-family: Alatsi, sans-serif;font-size: 40px;text-align: center;height: 40px;">Nossas Lojas</h2>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card"><img class="card-img-top w-100 d-block" src="./imagens/rio.jpeg" style="height: 190px;filter: hue-rotate(0deg) saturate(0%);">
                            <div class="card-body">
                                <h4 class="card-title" style="color: #e5053a;"><strong>Rio de Janeiro - RJ</strong></h4>
                                <p class="card-text">Avenida Presidente Tal, 10º andar</p>
                                <p class="card-text">(21) 1234-5678</p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card"><img class="card-img-top w-100 d-block" src="./imagens/saopaulo.jpeg" style="height: 190px;filter: saturate(0%);">
                            <div class="card-body">
                                <h4 class="card-title" style="color: #e5053a;"><strong>São Paulo - SP</strong></h4>
                                <p class="card-text">Avenida Presidente Tal, 05º andar,Centro<br></p>
                                <p class="card-text">(11) 1234-5678<br></p>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card"><img class="card-img-top w-100 d-block" src="./imagens/belem.jpeg" style="height: 190px;filter: saturate(0%);">
                            <div class="card-body">
                                <h4 class="card-title" style="color: #e5053a;"><strong>Belém - PA</strong></h4>
                                <p class="card-text">Avenida Presidente Tal, 3º andar, Centro</p>
                                <p class="card-text">(91) 1234-5678<br></p>
                            </div>
                            <div></div>
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
