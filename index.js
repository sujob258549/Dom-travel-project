


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

        const yourBaset = document.getElementById('your-baset');
        const yourBasetText = parseInt(yourBaset.innerText);

        if (yourBasetText - productPrice < 0) {
            return;
        }

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



        yourBaset.innerText = (yourBasetText - productPrice).toFixed(2);

        const newButtons = document.getElementsByClassName('new-buttons');
        for (let button of newButtons) {
            button.removeAttribute('disabled');
        }
        cardButton.classList.add('bg-red-500');
        indexCount++;

    });
}



const cardButtonse = document.getElementsByClassName('card-button');
for (const cardBtn of cardButtonse) {
    cardBtn.addEventListener('click', function (e) {
        cardBtn.setAttribute('disabled', '')
       
    })
}



// my code ...................................
function sideAmount(category) {
    const totalDiscount = document.getElementById('grand-prise');
    const totalAmount = document.getElementById('total-prise');
    const totalText = totalAmount.innerText;
    const totalDiscountFloat = parseFloat(totalText);
    let adjustedTotal = totalDiscountFloat;

    if (category === "tran") {
        adjustedTotal -= 200;
        totalDiscount.innerText = adjustedTotal;

    }
    else if (category === "bus") {
        adjustedTotal += 200;
        totalDiscount.innerText = adjustedTotal.toFixed(2);

    }

    else if (category === "flite") {
        adjustedTotal += 500;
        totalDiscount.innerText = adjustedTotal.toFixed(2);

    }
    else {
        totalDiscount.innerText = adjustedTotal.toFixed(2);

    }
}

// function sideAmount(category) {
//     const totalDiscountElement = document.getElementById('grand-prise');
//     const totalAmountElement = document.getElementById('total-prise');
//     const totalText = totalAmountElement.innerText;
//     const totalAmountFloat = parseFloat(totalText);

//     let adjustedTotal = totalAmountFloat;

//     if (category === "tran") {
//         adjustedTotal -= 200; // Subtract 200 for "tran" category
//     } else if (category === "bus") {
//         adjustedTotal += 200; // Add 200 for "bus" category
//     } else if (category === "flite") {
//         adjustedTotal += 500; // Add 500 for "flite" category
//     }

//     // Update the displayed total with the adjusted total
//     totalDiscountElement.innerText = adjustedTotal.toFixed(2); // Ensure two decimal places
// }
