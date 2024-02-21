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

    const seat = document.getElementById("seat-left").innerText;
    document.getElementById("seat-left").innerText = parseInt(seat) - 1;

    const seat1 = document.getElementById("seat-selected").innerText;
    document.getElementById("seat-selected").innerText = parseInt(seat1) + 1;

   
    document.getElementById(id).disabled = true;
    const disable = document.getElementById(id);
    disable.classList.add("btn-success");
    
    
}

function totalPrice() {
    const totalPrice = document.getElementById('total').innerText;
    const convertedPrice = parseInt(totalPrice);
    const sumTotal = convertedPrice + ticketPrice;
    document.getElementById('total').innerText = sumTotal;
}

function grandTotal(someThing) {
    const lastPrice = document.getElementById('total').innerText;
    if (someThing == undefined) {
        const grandTotalPrice = document.getElementById('grand-total').innerText;
        const convertedGrandPrice = parseInt(grandTotalPrice);
        document.getElementById('grand-total').innerText = lastPrice;
    }
    else {
        const couponCode = document.getElementById("coupon-code").value;
        if (couponCode === "NEW15") {
            const discount = lastPrice * 0.15;
            document.getElementById('grand-total').innerText = lastPrice - discount;
            const coupondiv = document.getElementById("coupon-hide")
            coupondiv.classList.add("hidden");
        }
        else if (couponCode == "Couple 20") {
            const discount1 = lastPrice * 0.2;
            document.getElementById('grand-total').innerText = lastPrice - discount1;
            const coupondiv = document.getElementById("coupon-hide")
            coupondiv.classList.add("hidden");
        } else {
            alert("Please enter valid coupon");
        }
    }

}



