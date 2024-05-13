# Explicações do desafio

Este repositório é o utilizado como resposta ao desafio de calculo de partidas rankeadas da DIO. O objetido é a utilização de funções para o calculo do saldo de vitórias e posicionamento do Heroi frente a um sistema de ranking.

Fora utilizados if/else statements (para a colocação do rank do Heroi), chamada de funções para o calculo do saldo, utilização de variaveis para salvar as informações adquiridas e calculadas.

Nesse desafio, os dados do Heroi são inseridos diretamente no código e não pelo usuário por linha de comando. Foi escolhido realizar dessa forma pois em um jogo é adquirida a informação diretamente do histórico e não digitado pelo usuário.

## IDE utiliza

Foi utilizada a IDE NeoVim com plugins [Lunarvim](https://www.lunarvim.org/) além de Node.Js para teste do código em terminal de forma local.

## Rankings utilizados

|Ranking|XP|
|--------|-------|
|Nenhum|saldo <=0|
|Ferro|saldo<=10|
|Bronze|10<saldo<=20|
|Prata|20<saldo<=50|
|Ouro|50<saldo<=80|
|Diamante|80<saldo<=90|
|Lendario|90<saldo<=100|
|Imortal|100<saldo|
