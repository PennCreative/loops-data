const rootElement = document.querySelector('#root')
rootElement.innerHTML = `<button id='main-btn'>MAIN</button>`

const desserts = [
  { id: 1,
    name: 'Apple Pie',
    ingredients: 'apples, sugar, butter, spices',
    bakeTemp: 375,
    pairing: 'Vanilla Bean Ice Cream',
    imgUrl: '',
  },
  { id: 2,
    name: 'Chess Pie',
    ingredients: 'Chess Pieces, sugar, butter, spices',
    bakeTemp: 375,
    pairing: 'Vanilla Bean Ice Cream',
    imgUrl: '',
  }
]
let domString = '';

for (const box of desserts) {
  domString += `<div class="card" style="width: 18rem;">
  <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${desserts.name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
};

rootElement.innerHTML = domString;
