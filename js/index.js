// ITERATION 1

function updateSubtotal(product) { 
  let price = product.querySelector(".price span")
  let quantity = product.querySelector(`.quantity input[value="0"]`)

  let priceValue = Number(price.innerText)
  let quantityValue = Number(quantity.value)
  let subTotal = priceValue * quantityValue

  let subTotalTarget = product.querySelector(".subtotal span")
  subTotalTarget.innerText =  subTotal

  return subTotal
  console.log('Calculating subtotal, yey!');

  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productAll = document.querySelectorAll(".product")
  let allTheTotal = 0
  productAll.forEach((product) => {
    let total1 = updateSubtotal(product)
    allTheTotal = allTheTotal + total1
  })
  
  console.log(productAll)
  // ITERATION 3
  //... your code goes here
  let total = document.querySelector("h2 span")

  total.innerText = allTheTotal

  return allTheTotal
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
console.log('The target in remove is:', target);
  //... your code goes here
  let parentNode = target.parentNode
  parentNode.remove(".product")

 
  console.log(parentNode)
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  console.log("youhou")
  let name = document.querySelector(`.create-product input[type="text"]`).placeholder
  let unitPrice = document.querySelector(`.create-product input[type="number"]`).value
  
  
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButton = document.querySelectorAll(".action");
  console.log(removeButton)
  removeButton.forEach((button) => {
    button.addEventListener('click', removeProduct)
  });
  const createButton = document.querySelector(".btn")
  console.log(create)
  createButton.addEventListener('click', createProduct)
  


  //... your code goes here
});
