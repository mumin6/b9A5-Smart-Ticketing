;
const ticketPrice = 550;
const ticketClass = "Economy";

function selectSeat(id) {
    const seat3 = document.getElementById("seat-selected").innerText;
    const seat4 = parseInt(seat3);

    if (seat4 < 4) {
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
        const updatedSeat1 = parseInt(seat1) + 1;
        document.getElementById("seat-selected").innerText = updatedSeat1;


        document.getElementById(id).disabled = true;
        const disable = document.getElementById(id);
        disable.classList.add("btn-success");
    } else {
        alert("you can only buy 4 ticket at a time")
    }

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

function showPopup() {
    const phnNumber = document.getElementById("phone-number").value;
    const length = phnNumber.length;
    if (length != 0) {
        const successSection = document.getElementById('success');
        successSection.classList.remove('hidden');
        const mainSection = document.getElementById('main-section');
        mainSection.classList.add('hidden');
    } else {
        alert("Enter phone number")
    }

}
function showMainSection() {
    const successSection = document.getElementById('success');
    successSection.classList.add('hidden');
    const mainSection = document.getElementById('main-section');
    mainSection.classList.remove('hidden');
}

