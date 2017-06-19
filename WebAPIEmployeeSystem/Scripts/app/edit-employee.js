angular.module('EditEmployee', []);

angular.module('EditEmployee').component('editemployeeList', {
    templateUrl: 'Scripts/app/employee-addupdate.template.html',
    controller: function EditEmployeeController($scope, $http) {
        $scope.pagename = 'Edit';
        var uri = '/api/employees', mode = '', Employee = {};
        var empId = window.location.search.substring(1).split('&')[0].split('=')[1];

        $scope.employee = $http.get(uri + '/' + empId)
        $scope.employee.then(function (response) {
            $scope.employees = response.data;
            Employee = {
                Name: response.data.Name,
                Department: response.data.Department,
                JoinDate: response.data.JoinDate,
                Age: response.data.Age,
                Photo: response.data.Photo
            }
            $scope.emp = Employee;
        });

        $scope.submit = function () {
            var IsValidate = true;
            $('.required').each(function () {
                if ($(this).val() == undefined || $(this).val() == "") {
                    $(this).css('border', '1px solid red');
                    IsValidate = false;
                }
                else {
                    $(this).css('border', '1px solid #cccccc');
                }
            });

            if (IsValidate) {
                var FileUpload = $("#fuPhoto").get(0);
                var Employee = {
                    Name: $("#txtName").val(),
                    Department: $("#txtDepartment").val(),
                    JoinDate: $("#txtJoinDate").val(),
                    Age: $("#txtAge").val(),
                    Photo: FileUpload.files[0].name
                }
                $scope.Edit = $http.put(uri, Employee)
                $scope.Edit.then(function (response) {
                    window.location = 'employeeIndex.html';
                    //}).error(function () {
                    //    alert('error');
                });
            }
        };
    }
});