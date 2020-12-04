<?php
include("ClassConexao.php");

class ClassProd extends ClassConexao{

    #Exibir carros em JSON
    public function exibeProd()
    {
        $BFetch=$this->conectaDB()->prepare("select * from tb_produto");
        $BFetch->execute();
        
        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id_prod"=>$Fetch['id_prod'],
                "nome_prod"=>$Fetch['nome_prod'],
                "descricao_prod"=>$Fetch['descricao_prod'],
                "preco_prod"=>$Fetch['preco_prod'],
                "img_prod"=>$Fetch['img_prod']
            ];

            $I++;
        }
        header("Access-Control-Allow-Origin:*");
        header("Content-type: application/json");
        echo json_encode($J);
    }

}
