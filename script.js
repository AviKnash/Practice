const playground = document.querySelector('#playground');

const fruitBasket = document.createElement('div');

fruitBasket.innerHTML = `
    <p>Apple</p>
    <p>Cherry</p>
    <p>Banana</p>
`;

playground.append(fruitBasket);

// while (fruitBasket.firstChild) {
//     fruitBasket.removeChild(fruitBasket.firstChild)
// };

fruitBasket.addEventListener("click",(event)=>{
    event.target.style.backgroundColor = "red"
})