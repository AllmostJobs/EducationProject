import angular from "angular";

let loginModule = angular.module('login', []);

let loginController = () => { 
    loginModule.controller('loginController', ($scope) => {
        // $scope.checkField = function(){
        //     if ($scope.ipnutModel === undefined){
        //         $scope.Massage = "Field is empty";
        //     } else {
        //         $scope.check = $scope.ipnutModel;
        //         console.log(check);
        //         // $scope.Massage = "This is not name";
        //     }
        //     $scope.check = $scope.ipnutModel;
        //         console.log($scope.check);
        // }
        
        console.log("AS");
    });
}

export default loginController;