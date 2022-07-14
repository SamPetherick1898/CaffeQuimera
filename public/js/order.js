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
    console.log(order)
    return order
}

function insertProduct(){
    const drinksForm = document.getElementById("drinks")
    drinksForm.value = showProducts()
    const numItems = document.getElementById("numItems")
    numItems.innerHTML = JSON.parse(drinksForm.value).length
}
insertProduct()