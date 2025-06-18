import {formatCurrency} from '../../scripts/utils/money.js';


console.log('test suite: formatCurrency')

console.log("converts cents to dollars")

if(formatCurrency(2095) === '20.95'){
  console.log("passed");
}else{
  console.log('failed');
}

console.log("works with zero")

if(formatCurrency(0) === '0.00'){
  console.log("passed");
}else{
  console.log('failed');
}

console.log("rounding number to nearest integer")

if(formatCurrency(2005.5) === '20.06'){
  console.log("passed");
}else{
  console.log('failed');
}