# YouTube Livestream Duration Calculator

Este projeto é um script que utiliza o Puppeteer para automatizar a navegação em uma página de um canal do YouTube e calcular o tempo total das lives (streams) em horas, minutos e segundos.

## Funcionalidades

- Acessa uma página de transmissões ao vivo de um canal do YouTube.
- Extrai a duração de todas as lives disponíveis na página.
- Calcula o tempo total das lives em horas, minutos e segundos.
- Exibe o resultado no console.

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Instalação

1. Clone este repositório:

  
   git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Navegue até o diretório do projeto:

 
Copiar código
cd nome-do-repositorio


3. Instale as dependências necessárias:

npm install
ou
yarn install


4. Como usar 

node index.js

Nota: Certifique-se de que o arquivo de entrada está nomeado como index.js ou ajuste o comando de acordo com o nome do arquivo.

O script irá:

Iniciar um navegador controlado pelo Puppeteer.
Acessar a página de transmissões ao vivo do canal YouTube especificado.
Extrair as durações das lives.
Calcular e exibir o tempo total das lives no console.


