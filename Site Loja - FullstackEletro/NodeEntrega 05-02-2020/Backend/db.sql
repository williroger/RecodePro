-- CREATE DATABASE RECODE;
-- CREATE TABLE usuarios(
-- id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(80)
-- );

-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 05/02/2021 às 18:05
-- Versão do servidor: 10.4.14-MariaDB
-- Versão do PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `bd_fs`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_produto`
--

CREATE TABLE `tb_produto` (
  `id_prod` int(11) NOT NULL,
  `nome_prod` varchar(100) NOT NULL,
  `descricao_prod` varchar(150) NOT NULL,
  `preco_prod` decimal(8,2) NOT NULL,
  `img_prod` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `tb_produto`
--

INSERT INTO `tb_produto` (`id_prod`, `nome_prod`, `descricao_prod`, `preco_prod`, `img_prod`) VALUES
(1, 'geladeiras', 'Geladeira Brastemp Frost Free 462 litros', '3080.00', './imagens/geladeira-brastemp.webp'),
(2, 'geladeiras', 'Retrô Frost Free 352 Litros Yellow', '4080.00', './imagens/geladeira_retro.png'),
(3, 'geladeiras', 'Geladeira Consul Frost Free 386 litros', '2080.00', './imagens/geladeira_consul.webp'),
(4, 'fogoes', 'Fogão 4 Bocas de Piso Esmaltec', '38550.00', './imagens/fogao-esmaltec.webp'),
(5, 'fogoes', 'Fogão Brastemp 5 Bocas, Inox, Turbo', '415.00', './imagens/fogao_brastemp.webp'),
(6, 'microondas', 'Forno Micro-ondas 31 litros', '450.00', './imagens/Micro-Ondas-EletroLux.webp'),
(7, 'microondas', 'Micro-ondas Panasonic 25 litros', '525.00', './imagens/microondas-panasonic.webp'),
(8, 'microondas', 'Micro-ondas Philco 25 Litros', '1000.00', './imagens/microondas-philco.webp'),
(9, 'lavaloucas', 'Lava Louças Eletrolux-Polishop', '1200.00', './imagens/lavaloucas-eletrolux.webp'),
(10, 'lavaloucas', 'Lava-louças Branca 8 Serviços', '1050.00', './imagens/lavaloucas-eletrolux2.webp'),
(11, 'lavadoura', 'Lavadora de Roupas Consul 9Kg', '980.00', './imagens/Lavadora-Roupas-Consul.webp'),
(12, 'lavadoura', 'Lavadora de Roupas Panasonic 12kg', '1080.00', './imagens/lavadoura-panasonic.webp');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  ADD PRIMARY KEY (`id_prod`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;