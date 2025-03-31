
let cards = [];

fetch('sithu_cards.json')
  .then(response => response.json())
  .then(data => {
    cards = data;
  });

function drawCard() {
  if (cards.length === 0) return;

  const card = cards[Math.floor(Math.random() * cards.length)];

  document.getElementById("theme").textContent = "主題：" + card.theme;
  document.getElementById("prompt1").textContent = "「" + card.prompt1 + "」";
  document.getElementById("prompt2").textContent = "「" + card.prompt2 + "」";
  document.getElementById("prompt3").textContent = "「" + card.prompt3 + "」";

  const image = document.getElementById("cardImage");
  image.src = "assets/" + card.image;
  image.style.display = "block";
}
