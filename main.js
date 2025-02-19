document.getElementById('outlet').onclick = function(){
    alert('Ups nuestro outlet está pelado')
}

const btnCart = document.querySelector ('.container-icon')
const containerCartProducts = document.querySelector ('.container-cart-products')

btnCart.addEventListener ('click',() =>{
    containerCartProducts.classList.toggle('hidden-cart')
})