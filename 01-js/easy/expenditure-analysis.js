/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  var totalspend = {}

  for(var i=0; i< transactions.length; i++){
    var t= transactions[i];

    if(totalspend[t.category]){
      totalspend[t.category]=totalspend[t.category] + t.price;
    }else{
      totalspend[t.category]=t.price;
    }
    
  }
  var keys = Object.keys(totalspend);
  var ans1=[];

  for(var i=0; i< keys.length; i++){
    var cat=keys[i]
    ans1.push ({
      category : cat ,
      totalspendoneach : totalspend[cat]
    })
    
  }
  console.log(ans1);
}
 


var transactions = [
  {
    itemName : "cocola" ,
    category : "drink" ,
    price : 44 ,
    timestamp : "12 JUN"
  },
  {
    itemName : "pepsi" ,
    category : "drink" ,
    price : 45 ,
    timestamp : "12 JUN"
  },
  {
    itemName : "bajji" ,
    category : "food" ,
    price : 30 ,
    timestamp : "12 JUN"
  }

]
calculateTotalSpentByCategory(transactions);

module.exports = calculateTotalSpentByCategory;
