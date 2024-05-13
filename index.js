let vitorias = 55;
let derrotas = 20;

mostrarRankHeroi(vitorias, derrotas);

function mostrarRankHeroi(vitorias, derrotas) {
  let total =  calculaSaldo(vitorias, derrotas);
  chamaRank(total);
}

function calculaSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function chamaRank(total) {
  let rank="";
  if (total< 0){
    rank += "Não classificado";
  } else if (total <= 10 ){
    rank += "Ferro";
  } else if (total <= 20) {
    rank += "Bronze";
  } else if (total <= 50) {
    rank += "Prata";
  } else if (total <= 80) {
    rank += "Ouro";
  } else if (total <= 90) {
    rank += "Diamante";
  } else if(total <= 100) {
    rank += "Lendário";
  } else {
    rank += "Imortal";
  }
  console.log("O Heroi tem saldo de "+total+" está no nível de "+rank);
}
