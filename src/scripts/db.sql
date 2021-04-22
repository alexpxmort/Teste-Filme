
###SCRIPT PARA CRIAR DATABASE E TABELA DE FILMES

CREATE DATABASE nest;
use nest;

CREATE TABLE `filmes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `autor` varchar(255) COLLATE utf8_unicode_ci NOT  NULL,
   `comentario` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
   `estrelas` int(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
