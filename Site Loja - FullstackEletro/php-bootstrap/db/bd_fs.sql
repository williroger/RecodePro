-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08/11/2020 às 05:20
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
-- Estrutura para tabela `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `msg` varchar(300) DEFAULT NULL,
  `data` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `comentarios`
--

INSERT INTO `comentarios` (`id`, `nome`, `email`, `msg`, `data`) VALUES
(1, 'Marcelinho', 'marcelinho@uol.com', 'E aí, pessoal, tudo bom? heheheh Chat do uol', '2020-11-03 19:54:56'),
(2, 'Willi Roger Sousa da Silva', 'williroger@usp.br', 'testando o forms, será que funciona?', '2020-11-07 23:59:53'),
(3, 'Maria', 'maria-ana@uol.com', 'Olá! Gostei da loja!', '2020-11-08 01:19:01');

-- --------------------------------------------------------

--
-- Estrutura para tabela `tb_pedidos`
--

CREATE TABLE `tb_pedidos` (
  `id_cliente` int(11) NOT NULL,
  `nome_cliente` varchar(100) NOT NULL,
  `endereco_cliente` varchar(250) NOT NULL,
  `telefone_cliente` varchar(15) NOT NULL,
  `id_prod` varchar(50) NOT NULL,
  `quantidade_cliente` int(10) NOT NULL,
  `ValorTotal_Cliente` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Despejando dados para a tabela `tb_pedidos`
--

INSERT INTO `tb_pedidos` (`id_cliente`, `nome_cliente`, `endereco_cliente`, `telefone_cliente`, `id_prod`, `quantidade_cliente`, `ValorTotal_Cliente`) VALUES
(1, 'Valderlei Andrade', 'Rua Juazeiro Bairro Solidade', '5594948151', '02', 2, '3500.00'),
(2, 'Juremar Santos Andrade', 'Rua Canaa Bairro Betania', '51846135168', '02', 2, '3500.00'),
(3, 'Mario Alberto Gonçaves', 'Rua Moises Bairro Solimao', '941651681', '02', 2, '3500.00'),
(4, 'Jurema Azonis', 'Rua Santo Lopes Bairro Altamira', '9484515165', '02', 2, '3500.00'),
(5, 'Sebatiana de Andrade Maroc', 'Rua Coronel Tiao do Sul Bairro Guamamirim', '559541948151', '02', 2, '3500.00'),
(6, 'Valdiney Kemilly', 'Rua Macali Calquer  Bairro Telefero', '5594948151', '02', 2, '3500.00'),
(7, 'Marcos Silveira Santos Silva', 'Rua Sem fundo  Bairro Simonal', '5594948151', '02', 2, '3500.00'),
(8, 'Maria Aparecida Oculta', 'Rua Militao de Almeida do Sul Bairro Chapadao do Guarapes', '51561651516', '02', 2, '3500.00'),
(9, 'Miguelito Junior', 'Rua Sambarilove Bairro Amor', '5594948151', '02', 2, '3500.00'),
(10, 'Ana Maria Cookie', 'Rua Juazeiro do Sul Bairro Sulameiora', '77454815151', '01', 2, '3500.00'),
(11, 'Valter Disney', 'Rua Santo Expediao do Sul Bairro Macapa', '54546541651', '02', 5, '3500.00');

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
-- Índices de tabela `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  ADD PRIMARY KEY (`id_cliente`);

--
-- Índices de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  ADD PRIMARY KEY (`id_prod`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `tb_pedidos`
--
ALTER TABLE `tb_pedidos`
  MODIFY `id_cliente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de tabela `tb_produto`
--
ALTER TABLE `tb_produto`
  MODIFY `id_prod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
