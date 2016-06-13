crmApp.controller('contactCtrl', ['$scope', function ($scope) {
    var contact={};
    contact.lastname = 'Ferm';
    $scope.contact = contact;
    $scope.status = [{
        value: 1, display: 'Aktiv'
    }, {
        value: 2,
        display: 'Slutat'
    }, {
        value: 3,
        display: 'Annat'
    }];
    $scope.submitContact = function () {
        var t = "";
    };
  
}]);

