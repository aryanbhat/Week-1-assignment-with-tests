/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/


let idx = 0;
function calculateTotalSpentByCategory(transactions) {
  let ans = [];
  for(let i = 0; i<transactions.length ; i++){
    let check = false;
    for(let j=0;j<ans.length;j++){
      if(ans[j].category == transactions[i].category){
        check = true;
           idx = j;
          break;
      }
    }
    if(check){
      ans[idx].totalSpent += transactions[i].price;
    }
    else{
        let obj = {};
        obj['category'] = transactions[i].category;
        obj['totalSpent'] =  transactions[i].price;
        ans.push(obj);
    }
  }
  return ans;
}


module.exports = calculateTotalSpentByCategory;
