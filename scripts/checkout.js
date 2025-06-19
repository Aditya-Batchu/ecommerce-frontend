import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js';
//import '../data/backend-practice.js';
import { loadCart } from "../data/cart.js";

async function loadPage(){

  await loadProductsFetch();

  const value = await new Promise((resolve)=>{
    loadCart(()=>{
      resolve('2');
    });
  });

  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

/*
Promise.all([
  loadProductsFetch()
  ,
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve('2');
    });
  })

]).then((values)=>{
  console.log(values)
  renderOrderSummary();
  renderPaymentSummary();
})
*/

// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve('1');
//   })

// }).then((value)=>{
//   console.log(value)

//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve('2');
//     });

//   })
// }).then((value)=>{
//    console.log(value)

//    renderOrderSummary();
//    renderPaymentSummary();
// })


// loadProducts(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// });


// Async Wait : Even better way to organise asyncronous code(Shortcut for promises)
// async function return promise