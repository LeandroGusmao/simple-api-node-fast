Aplicação Node com Express e Sequelize - CRUD de Produtos
Este é um projeto desenvolvido com o objetivo de estudar o desenvolvimento de uma API REST utilizando Node.js, Express e Sequelize, para realizar um CRUD (Create, Read, Update, Delete) de produtos em um banco de dados Postgresql.

Requisitos
Para executar este projeto em sua máquina, você precisa ter instalado:

Node.js (versão 12 ou superior)
NPM (gerenciador de pacotes do Node.js)
Postgresql (ou outro banco de dados relacional compatível com Sequelize)
Instalação
Clone este repositório em sua máquina.
Navegue até a pasta do projeto e execute o comando npm install para instalar as dependências.
Crie um banco de dados Postgresql com o nome crud_produtos.
Configure as informações de conexão com o banco de dados no arquivo config/database.js.
Execute o comando npm run dev para iniciar o servidor local.
Acesse a API em http://localhost:3000.
Funcionalidades
Cadastro de produtos (nome, preço e descrição)
Visualização de todos os produtos cadastrados
Visualização de um produto específico por ID
Edição de produtos existentes por ID
Exclusão de produtos do banco de dados por ID
Tecnologias utilizadas
Node.js
Express
Sequelize (ORM para banco de dados)
Postgresql (banco de dados relacional)
Considerações finais
Este projeto foi desenvolvido apenas para fins de estudos e não deve ser utilizado em produção. O código fonte está disponível para referência e aprendizado. Caso deseje utilizar este projeto em um ambiente de produção, é recomendável realizar as devidas adaptações e testes necessários para garantir a segurança e confiabilidade da aplicação.
