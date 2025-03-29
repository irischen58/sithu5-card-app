
const images = [
  '0321可愛龍000.webp', '夢想03.webp', '卡 05_07.webp', '卡 05_08.webp',
  '卡4_06.webp', '卡05_09.webp', '卡05_11.webp', '卡05_12.webp',
  '卡49.webp', '卡50.webp'
];
const texts = [
  '「剛才那句話，是事實、感受，還是想法？」',
  '「這樣的感覺，從什麼時候開始的？」',
  '「如果不需要討好任何人，你會怎麼選擇？」',
  '「你真正想守護的是什麼？」',
  '「如果這個信念對你有傷，你為什麼還想保留它？」'
];
const cardContainer = document.getElementById('cardContainer');
const drawButton = document.getElementById('drawButton');

drawButton.addEventListener('click', () => {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  const randomText = texts[Math.floor(Math.random() * texts.length)];
  cardContainer.innerHTML = `
    <div class="card">
      <img src="assets/${randomImage}" alt="小小龍">
      <p>${randomText}</p>
    </div>
  `;
});
