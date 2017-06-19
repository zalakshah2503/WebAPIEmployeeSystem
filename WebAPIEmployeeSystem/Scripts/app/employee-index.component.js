angular.module('EmployeeApp', []);

angular.module('EmployeeApp').component('employeeList', {
    templateUrl:'Scripts/app/employee-index.template.html',
    controller: function EmployeeListController($scope, $http) {
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
            $scope.employee.then(function (response) {
                if (mode != 'find')
                    $scope.employees = response.data;
                else {
                    $scope.employees = [
                        {
                            Name: response.data.Name,
                            Department: response.data.Department,
                            JoinDate: response.data.JoinDate,
                            Age: response.data.Age,
                            Id: response.data.Id,
                            Photo: response.data.Photo
                        }
                    ];
                    mode = '';
                }
            });
            uri = '/api/employees';
        }
    }
});