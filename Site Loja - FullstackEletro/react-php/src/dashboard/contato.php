<?php 
// credenciais

$servername = "localhost";
$username = "root";
$password = "";
$database = "bd_fs";

// Criar a conexão
function connect(){

$servername = "localhost";
$username = "root";
$password = "";
$database = "bd_fs";

    $connect = mysqli_connect($servername, $username, $password, $database);
    if (mysqli_error($connect)) {
        die("A conexão ao Banco de Dados falhou: " . mysqli_connect_error());
    }

    mysqli_set_charset($connect, "uft8");

    return $connect;

}
$con = connect();
    
    //Receber e Enviar

    $postdata = file_get_contents("php://input");

    if(isset($postdata) && !empty($postdata))
    {
        $request = json_decode($postdata);

        $nome = $request->nome;
        $email = $request->email;
        $msg = $request->msg;


    //armazenar dados

    $sql = "INSERT INTO `comentarios` (`nome`, `email`, `msg`) VALUES ('{$nome}', '{$email}', '{$msg}')";
    
    if(mysqli_query($con,$sql))
    {
        http_response_code(201);
    }
    else
    {
        http_response_code(422);
    }

}

function cors() {

    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
        // you want to allow, and if so:
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            // may also be using PUT, PATCH, HEAD etc
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }

    echo "Mensagem Enviada";
}

cors();

?>