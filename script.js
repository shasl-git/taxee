"use strict";
const minusButton = document.getElementById('minusButton');
const plusButton = document.getElementById('plusButton');
const loadersInput = document.getElementById('loadersInput');

minusButton.addEventListener('click', () => {
let currentValue = parseInt(loadersInput.value);
if (currentValue > 0) {
    loadersInput.value = currentValue - 1;
}
});

plusButton.addEventListener('click', () => {
let currentValue = parseInt(loadersInput.value);
loadersInput.value = currentValue + 1;
});


const productData = {
    "ton-3x": {
        image: "img/ton-3x.webp",
        title: "3-х тонник",
        volume: "20 м³",
        length: "4.2 м",
        width: "2.2 м",
        height: "2.3 м",
        payload: "3 т"
    },
    "ton-5": {
        image: "img/ton-5.webp",
        title: "5 тонник",
        volume: "36.5 м³",
        length: "6.2 м",
        width: "2.4 м",
        height: "2.45 м",
        payload: "5 т"
    },
    "gazel-pass": {
        image: "img/gazel-pass.webp",
        title: "Газель груз\\пассажирская",
        volume: "10 м³",
        length: "3 м",
        width: "1.6 м",
        height: "2.1 м",
        payload: "1.5 т"
    },
    "sobol-pass": {
        image: "img/sobol-pass.webp",
        title: "Соболь груз\\пассажирская",
        volume: "5 м³",
        length: "1.5 м",
        width: "1.5 м",
        height: "2 м",
        payload: "0.99 т"
    },
    "gazel-6m": {
        image: "img/gazel-6m.webp",
        title: "Газель 6 метров",
        volume: "30 м³",
        length: "6.2 м",
        width: "2.1 м",
        height: "2.2 м",
        payload: "2.5 т"
    },
    "gazel-4m": {
        image: "img/gazel-4m.webp",
        title: "Газель 4 метра",
        volume: "20 м³",
        length: "4.2 м",
        width: "2 м",
        height: "2.2 м",
        payload: "2 т"
    },
    "gazel-3m": {
        image: "img/gazel-3m.webp",
        title: "Газель 3 метра",
        volume: "11 м³",
        length: "3 м",
        width: "2 м",
        height: "1.8 м",
        payload: "1.5 т"
    },
    "porter": {
        image: "img/porter.webp",
        title: "Портер",
        volume: "8 м³",
        length: "2.7 м",
        width: "1.6 м",
        height: "1.6 м",
        payload: "0.99 т"
    },
    "kabluk": {
        image: "img/kabluk.webp",
        title: "Каблучек", 
        volume: "4 м³",
        length: "2 м",
        width: "1.3 м",
        height: "1.3 м",
        payload: "0.5 т"
    }
};

const selectProductButton = document.getElementById('selectProductButton');
const productSelectionPanel = document.getElementById('productSelectionPanel');
const productSelect = document.getElementById('productSelect');
const productImage = document.getElementById('productImage');
const productTitle = document.getElementById('productTitle');
const productVolume = document.getElementById('productVolume');
const productLength = document.getElementById('productLength');
const productWidth = document.getElementById('productWidth');
const productHeight = document.getElementById('productHeight');
const productPayload = document.getElementById('productPayload');

function toggleProductSelectionPanel() {
    productSelectionPanel.classList.toggle('active');
}
selectProductButton.addEventListener('click', function(event) {  
    event.preventDefault(); 
    toggleProductSelectionPanel();
});

radioButtonsContainer.addEventListener('change', function(event) {
    const selectedProduct = event.target.value; 
    const productInfo = productData[selectedProduct];

    productImage.src = productInfo.image;
    productTitle.textContent = productInfo.title;
    productVolume.textContent = productInfo.volume;
    productLength.textContent = productInfo.length;
    productWidth.textContent = productInfo.width;
    productHeight.textContent = productInfo.height;
    productPayload.textContent = productInfo.payload;

    productSelectionPanel.classList.remove('active');
});

const createBtn = document.getElementById("bottonNewAdress")
const list_adress = document.getElementById("list_adress")
createBtn.onclick = function(){
    list_adress.insertAdjacentHTML ("beforeend",
    `<div id="list_adress">
        <h3>Адрес выгрузки</h3>
        <div>
            <input autocomplete="off" placeholder="Введите адрес выгрузки" name="address.1.a">
            <p></p>
            <div class="orderForm_map">
                <img alt="" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" style="color:transparent" src="img/map.svg">
            </div>
        </div>
        <span class="orderForm_delete"></span>
    </div>`) 
}