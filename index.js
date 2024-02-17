


// const cardButton = document.getElementsByClassName('card-button');

// let countNumber = 1;
// let indexCount = 1;
// let topalPrise = 0;
// for (const cardButtons of cardButton) {
//     cardButtons.addEventListener('click', function (e) {
//         document.getElementById('like-rank').innerText = countNumber;
//         // const newLikeRankValue = likeRank.innerText;
//         countNumber += 1;
//         // likeRank.innerText = countNumber;
//         const pleaseNames = e.target.parentNode.childNodes[1].innerText;
//         const pleasePrise = e.target.parentNode.childNodes[3].childNodes[0].innerText;
//         const pleasePriseFloat = parseFloat(pleasePrise);

//         const setPrise = document.getElementById('set-prise');

//         const li = document.createElement('li');

//         const p1 = document.createElement('p');
//         p1.innerText = `${indexCount} . ${pleaseNames} :`;

//         const p2 = document.createElement('p');
//         p2.innerText = pleasePriseFloat;

//         li.appendChild(p1);
//         li.appendChild(p2);

//         setPrise.appendChild(li);

//         const totalPpriseDis = document.getElementById('total-prise');
//         const grandTotal = document.getElementById('grand-total');
//         // const totalPpriseDisFlot = parseFloat(totalPpriseDis).toFixed(2);

//        const totalAmount = topalPrise += pleasePriseFloat;
//        totalPpriseDis.innerText = totalAmount;
//        grandTotal.innerText = totalAmount;


//        const yourBaset = document.getElementById('your-baset');
//        const yourBasetText = yourBaset.innerText;


//        if(parseInt(yourBasetText) - pleasePriseFloat < 0 ){
//         alert();
//         return;

//       }  

//       parseInt(yourBasetText) - pleasePriseFloat;
//       yourBaset.innerText = newBaset;


//     //    if(totalAmount <= 900){
//     //     return totalAmount;
//     //    }



//         // const newli2 = setPrise.appendChild(newp2);
//         console.log(newBaset)

//         indexCount++
//     })
// }


const cardButtons = document.getElementsByClassName('card-button');

let countNumber = 1;
let indexCount = 1;
let totalPrise = 0;

for (const cardButton of cardButtons) {
    cardButton.addEventListener('click', function (e) {
        document.getElementById('like-rank').innerText = countNumber;
        countNumber += 1;

        const productName = e.target.parentNode.childNodes[1].innerText;
        const productPrice = parseFloat(e.target.parentNode.childNodes[3].childNodes[0].innerText);

        const setPrise = document.getElementById('set-prise');
        const li = document.createElement('li');

        const p1 = document.createElement('p');
        p1.innerText = `${indexCount}. ${productName}:`;

        const p2 = document.createElement('p');
        p2.innerText = productPrice;

        li.appendChild(p1);
        li.appendChild(p2);
        setPrise.appendChild(li);

        totalPrise += productPrice;

        const totalPriseDisplay = document.getElementById('total-prise');
        const grandtotalPriseDisplay = document.getElementById('grand-prise');
        totalPriseDisplay.innerText = totalPrise.toFixed(2);
         grandtotalPriseDisplay.innerText = totalPrise.toFixed(2);

        const yourBaset = document.getElementById('your-baset');
        const yourBasetText = parseInt(yourBaset.innerText);

        if (yourBasetText - productPrice < 0) {
            return;
        }

        yourBaset.innerText = (yourBasetText - productPrice).toFixed(2);
        indexCount++;

    });
}

function sideAmount(catagory) {
    const tolalDiscound = document.getElementById('grand-prise');
    const atolalDiscound = document.getElementById('total-prise');
    const totalText = atolalDiscound.innerText;
    const totaldisCountFloat = parseFloat(totalText).toFixed(2);
    let adjustedTotal = totalAmountFloat;
    if (catagory == "tran") {
        const trin = adjustedTotal -= 200;
        tolalDiscound.innerText = trin;

    }
    else if (catagory === "bus") {
        const bus = adjustedTotal += 200;
        tolalDiscound.innerText = bus;
        console.log(bus)

    }
    else if (catagory === "flite") {
        const flite = adjustedTotal += 500;
        tolalDiscound.innerText = flite;


    }
    else {
        totaldisCountFloat;
        tolalDiscound.innerText = totaldisCountFloat;

    }

    console.log(totaldisCountFloat)

}

function sideAmount(category) {
    const totalDiscountElement = document.getElementById('grand-prise');
    const totalAmountElement = document.getElementById('total-prise');
    const totalText = totalAmountElement.innerText;
    const totalAmountFloat = parseFloat(totalText);

    let adjustedTotal = totalAmountFloat;

    if (category === "tran") {
        adjustedTotal -= 200; // Subtract 200 for "tran" category
    } else if (category === "bus") {
        adjustedTotal += 200; // Add 200 for "bus" category
    } else if (category === "flite") {
        adjustedTotal += 500; // Add 500 for "flite" category
    }

    // Update the displayed total with the adjusted total
    totalDiscountElement.innerText = adjustedTotal.toFixed(2); // Ensure two decimal places
}
