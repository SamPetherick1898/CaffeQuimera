function addToCart(id){

    let order;
    const drink = id

    let data = localStorage.getItem("cart")

    if( data === null) {
        order = []
    } else {
        order = JSON.parse(data)
    }

    if( !order.includes(id) ){
        order.push(id)
    }

    localStorage.setItem("cart", JSON.stringify(order))
    insertProduct()
}

function showProducts(){
    const order = localStorage.getItem("cart");
    //console.log(order)
    return order
}

function insertProduct(){
    const drinksForm = document.getElementById("drinks")
    drinksForm.value = showProducts()
    const numItems = document.getElementById("numItems")
    numItems.innerHTML = JSON.parse(drinksForm.value).length
}
insertProduct()

function deleteProduct(id){
    let key
    console.log(id)
    const products = JSON.parse(localStorage.getItem("cart"));
    const newProducts = products.filter(prod => {
      return prod !== id
    })
    localStorage.setItem("cart", JSON.stringify(newProducts))

    //window.location.href="/orders"
}
function updateProducts(){
    const drinksForm = document.getElementById("orders")
    drinksForm.value = showProducts()
}

