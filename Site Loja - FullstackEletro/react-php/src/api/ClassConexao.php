<?php
abstract class ClassConexao{


    #conexão banco de dados
    protected function conectaDB()
    {
        try{
            $Con=new PDO ("mysql:host=localhost;dbname=bd_fs", "root","");
            return $Con;
        } catch(PDOException $Erro) {
            return $Erro->getMessage();
        }

    }
}