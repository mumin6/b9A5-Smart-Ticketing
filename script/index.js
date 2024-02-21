;
const ticketPrice = 550;
const ticketClass = "Economy";
function selectSeat(id) {
    const btnName = document.getElementById(id).innerHTML;
  
    const show = document.getElementById("selected");

    const div = document.createElement("div");
    show.appendChild(div);
    div.classList.add("flex");
    div.classList.add("justify-between");
    const p = document.createElement("p");
    p.innerText = btnName;
    const p1 = document.createElement("p");
    p1.innerText = ticketClass;
    const p2 = document.createElement("p");
    p2.innerText = ticketPrice;
    div.appendChild(p);
    div.appendChild(p1);
    div.appendChild(p2);
    totalPrice();
    grandTotal();
}

function totalPrice() {
    const totalPrice = document.getElementById('total').innerText;
    const convertedPrice = parseInt(totalPrice);
    const sumTotal = convertedPrice + ticketPrice;
    document.getElementById('total').innerText = sumTotal;
}

function grandTotal() {
    const lastPrice = document.getElementById('total').innerText;
    const grandTotalPrice = document.getElementById('grand-total').innerText;
    const convertedGrandPrice = parseInt(grandTotalPrice);
    document.getElementById('grand-total').innerText = lastPrice;
}

