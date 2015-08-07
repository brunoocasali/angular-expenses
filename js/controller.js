function Expense(){
    this.description = '';
    this.value = 0;
    this.date = new Date();
    this.installments = 1;
}

var expensesApp = angular.module("expensesApp", []);

expensesApp.controller("ExpenseController", function($scope) {
    $scope.expense = new Expense();
    
    $scope.save = function(){
        alert('save!!');
    };
    
    $scope.loadList = function(){
        var list = localStorage.getItem("tasks_list");
        
        if(list != null) {
          $scope.list = JSON.parse(list);   
        }        
    };
    
    $scope.destroy = function(index){
        $scope.list.splice(index, 1);
        
        localStorage.setItem("tasks_list", JSON.stringify($scope.list));
    };
    
    $scope.loadList();
});