const cards = [
  {
    nome: "Dragão",
    ataque: 8,
    defesa: 6,
    magia: 9
  },
  {
    nome: "Guerreiro",
    ataque: 9,
    defesa: 8,
    magia: 2
  },
  {
    nome: "Mago",
    ataque: 4,
    defesa: 5,
    magia: 10
  }
];

function getRandomCard() {
  const index = Math.floor(Math.random() * cards.length);
  return cards[index];
}

function playGame() {
  const player = getRandomCard();
  let machine = getRandomCard();

  while (machine === player) {
    machine = getRandomCard();
  }

  document.getElementById("player-card").innerHTML = `
    <h3>${player.nome}</h3>
    <p>Ataque: ${player.ataque}</p>
    <p>Defesa: ${player.defesa}</p>
    <p>Magia: ${player.magia}</p>
  `;

  document.getElementById("machine-card").innerHTML = `
    <h3>${machine.nome}</h3>
    <p>Ataque: ${machine.ataque}</p>
    <p>Defesa: ${machine.defesa}</p>
    <p>Magia: ${machine.magia}</p>
  `;

  let resultado = "";
  if (player.ataque > machine.ataque) {
    resultado = "Você venceu!";
  } else if (player.ataque < machine.ataque) {
    resultado = "Você perdeu!";
  } else {
    resultado = "Empate!";
  }

  document.getElementById("result").innerText = resultado;
}