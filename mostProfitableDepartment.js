var mostProfitableDepartment = function(sales){
  if(typeof sales === 'object' || sales instanceof Object){
    // Let's add sales for each department
    var hardwareSales = 0;
    var outdoorSales = 0;
    var carpentrySales = 0;

    for(var i = 0; i < sales.length; i++){
      var listItem = sales[i];
      var itemDepartment = listItem.department;
      var itemSales = listItem.sales;

      //this switch is to catch each department by name and add the sales of the particular department
      switch(itemDepartment){
        case 'hardware':
          hardwareSales += itemSales;
          break;
        case 'outdoor':
          hardwareSales += itemSales;
          break;
        case 'carpentry':
          carpentrySales += itemSales;
          break;
       }
    }

    var departmentMap = [];
    departmentMap.push(hardwareSales, hardwareSales, carpentrySales);

    //console.log(departmentMap);

    var newObj = [];

    for(var i = 0; i < departmentMap.length; i++){
      var depName = sales[i].department;
      var depProfit = departmentMap[i];
      newObj.push({depName, depProfit});
    }

    {department : 'hardware', sales: 12000}
    //console.log(newObj);

    var count = 0;
    var moneyMaker = newObj[0].depProfit;
    for(var i = 1; i < newObj.length; i++){
      if(newObj[i].depProfit >= moneyMaker){
        moneyMaker = newObj[i].depProfit;
        count +=1;
      }
    }
    return newObj[count].depName;

  }else {
    return 'not an object';
  }
}
