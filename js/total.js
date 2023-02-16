let serial = 0

// first Card 
document.getElementById('first-btn').addEventListener('click', function(){
    serial += 1
    const productOneName = document.getElementById('first-product-name').innerText;
    const productOnePrice = document.getElementById('first-product-price').innerText;
    const productOneQuantity = document.getElementById('first-product-quantity').value;

    const productOneTotalPrice = parseInt(productOnePrice) * parseInt(productOneQuantity);

    displayData(productOneName,productOnePrice,productOneQuantity,productOneTotalPrice)
})

// second card 
document.getElementById('second-btn').addEventListener('click', function(e){
    serial += 1
    const productTwoName = e.target.parentNode.parentNode.children[0].innerText;
    const productTwoPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const productTwoQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText;

    const productTwoTotalPrice = parseInt(productTwoPrice) * parseInt(productTwoQuantity)
    
    displayData(productTwoName,productTwoPrice,productTwoQuantity,productTwoTotalPrice);
})

// card three
document.getElementById('btn-three').addEventListener('click', function(event){
    serial += 1
    const productThreeName = event.target.parentNode.parentNode.children[0].innerText;
    const productThreePrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const productThreeQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;

    const productThreeTotal = parseInt(productThreePrice) * parseInt(productThreeQuantity);

    displayData(productThreeName,productThreePrice,productThreeQuantity,productThreeTotal)

})

// card four
document.getElementById('btn-four').addEventListener('click',function(){
    serial += 1
    const productFourName = document.getElementById('product-four-name').innerText;
    const productFourPrice = document.getElementById('product-four-Price').innerText;
    const productFourQuantity = document.getElementById('product-four-quantity').value;

    const productFourTotal = parseInt(productFourPrice) * parseInt(productFourQuantity);

    displayData(productFourName, productFourPrice, productFourQuantity, productFourTotal);
})

// card five
document.getElementById('btn-five').addEventListener('click', function(){
    serial += 1
    const productFiveName = document.getElementById('card-five-name').innerText;
    const productFivePrice = document.getElementById('card-five-price').innerText
    const productFiveQuantity = document.getElementById('card-five-quantity').value;

    const productFiveTotal = parseInt(productFivePrice) * parseInt(productFiveQuantity)

    displayData(productFiveName, productFivePrice, productFiveQuantity, productFiveTotal)
})


// card six 
document.getElementById('btn-six').addEventListener('click', function(){
    serial += 1
    const productSixName = document.getElementById('card-six-name').innerText;
    const productSixPrice = document.getElementById('card-six-price').innerText
    const productSixQuantity = document.getElementById('card-six-quantity').value;

    const productSixTotal = parseInt(productSixPrice) * parseInt(productSixQuantity)

    displayData(productSixName, productSixPrice, productSixQuantity, productSixTotal)
})



// common function
function displayData(productName,productPrice,productQuantity,productTotalPrice){
    const tableContainer = document.getElementById('table-container')
    const tr = document.createElement('tr')
    tr.innerHTML=`
    <td>${serial}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productQuantity}</td>
    <td>${productTotalPrice}</td>
    `;
    tableContainer.appendChild(tr);
}