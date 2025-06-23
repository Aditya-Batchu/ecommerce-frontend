// import {cart} from '/data/cart.js';
import {cart, addToCart} from '../data/cart.js';
import {products,loadProducts} from '../data/products.js';
import { formatCurrency } from './utils/money.js';

// alert('Good Morning!');Ex-1a
// alert('Aditya Batchu');Ex-1b
// console.log(10+5);Ex-1c
// console.log(20-5);Ex-1d
// console.log(2+2-5);Ex-1e
// document.body.innerHTML = 'Good Morning';Ex-1f
// document.body.innerHTML = 'Aditya Batchu';Ex-1g
// console.log(10+8+20);Ex-1h
// console.log(100-20-50+200);Ex-1i
// document.body.innerHTML = '';Ex-1j

loadProducts(renderProductsGrid);

function renderProductsGrid(){


  let productsHTML = '';

  products.forEach((product)=>{
    const html =`<div class="product-container">
            <div class="product-image-container">
              <img
                class="product-image"
                src="${product.image}"
              />
            </div>

            <div class="product-name limit-text-to-2-lines">
              ${product.name}
            </div>

            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="${product.getStarsUrl()}"
              />
              <div class="product-rating-count link-primary">${product.rating.count}</div>
            </div>

            <div class="product-price">${product.getPrice()}</div>

            <div class="product-quantity-container">
              <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            ${product.extrainfoHTML()}

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary js-add-to-cart-button"
            data-product-id = "${product.id}"
            >Add to Cart</button>
          </div>`

    productsHTML+=html;
  });

  function updateCartQuantity(){
    let totalQuantity = 0;
    cart.forEach((cartItem)=>{
      totalQuantity+=cartItem.quantity;
    });

    document.querySelector('.js-cart-quantity').innerHTML = totalQuantity;

    console.log(totalQuantity);
  }

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  document.querySelectorAll('.js-add-to-cart-button')
      .forEach((button)=>{
        button.addEventListener('click',()=>{
          const productId = button.dataset.productId;

          addToCart(productId);
          updateCartQuantity();

          // console.log(cart);
        })
      });



updateCartQuantity();
    }



// ${
//   product instanceof Clothing?
//     `<a href="${product.sizeChartLink}">size chart</a>`
// }