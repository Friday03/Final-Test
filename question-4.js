// Question 4: Shipping Cost Calculator

function calculateShippingCost(orderTotal1) {
  // เริ่มเขียนโค้ดที่นี่
  let msgReturn = "";
  // orderTotal1 > 4000 ? console.log("Shipping is free.") : orderTotal1 > 2000 ?  console.log("Shipping cost is 250 Baht.") : console.log("Shipping cost is 500 Baht.");
  orderTotal1 > 4000 ? msgReturn = "Shipping is free." : orderTotal1 > 2000 ? msgReturn = "Shipping cost is 250 Baht." : msgReturn = "Shipping cost is 500 Baht.";

  return msgReturn;
}

// ตัวอย่างการใช้งาน
const orderTotal1 = 6000;
const orderTotal2 = 3000;
const orderTotal3 = 150;

console.log(calculateShippingCost(orderTotal1)); // "Shipping is free."
console.log(calculateShippingCost(orderTotal2)); // "Shipping cost is 250 Baht."
console.log(calculateShippingCost(orderTotal3)); // "Shipping cost is 500 Baht."

