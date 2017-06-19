

var EmployeeApp = angular.module('EmployeeApp', []);

//// Define the `PhoneListController` controller on the `phonecatApp` module
EmployeeApp.controller('EmployeeListController', function EmployeeListController($scope, $http) {
    //$scope.employee = $http.get('/api/employees');
    //$scope.employee.then(function (data) {
    //});
    var uri = '/api/employees', mode = '';
    FunPageLoad();

    $scope.empdelete = function () {
        $http.delete(uri + '/' + this.emp.Id);
        $scope.employees = [];
        setTimeout(FunPageLoad(), 1000);
    }

    $scope.find = function () {
        findId = $('#prodId').val();
        if (findId != undefined && findId != "") {
            uri = uri + '/' + findId;
            mode = 'find';
        }
        $scope.employees = [];
        setTimeout(FunPageLoad(), 1000);
    }


    function FunPageLoad() {
        $scope.employee = $http.get(uri);
        $scope.employee.then(function (data) {
            if (mode != 'find')
                $scope.employees = data.data;
            else {
                $scope.employees = [
                    {
                        Name: data.data.Name,
                        Department: data.data.Department,
                        JoinDate: data.data.JoinDate,
                        Age: data.data.Age,
                        Id: data.data.Id
                    }
                ];
                mode = '';
            }
        });
        uri = '/api/employees';
    }
});