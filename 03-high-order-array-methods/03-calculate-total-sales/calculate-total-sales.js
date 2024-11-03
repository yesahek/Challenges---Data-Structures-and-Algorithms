function calculateTotalSalesWithTax(products, taxRate){
const totalSales = products.reduce((sum, products)=> sum + products.price*products.quantity , 0);
const taxAmount = (totalSales * taxRate)/100;
const totalSalesWithTax = totalSales + taxAmount;
return parseFloat(totalSalesWithTax.toFixed(2));
}
module.exports = calculateTotalSalesWithTax;