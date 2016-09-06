'use strict';

angular.module('contactApp')
.controller('contactsController', ['$scope', 'contactService', function($scope,contactService) {

    $scope.myContacts = {firstName:"", lastName:""};
    $scope.showForm = false;

    $scope.submitContacts = function () {


        $scope.contacts.push($scope.myContacts);

        contactService.getContacts().update({id:$scope.contact.id},$scope.contact);
        $scope.contactForm.$setPristine();
        $scope.myContacts = {firstName:"", lastName:""};
    };

        $scope.deleteContact = function () {
            contactService.getContacts().remove({id:$scope.contact.id},$scope.contact);
        };
        $scope.updateContact = function () {
          $scope.edit = true;
          contactService.getContacts().update({id:$scope.contact.id},$scope.contact);
          $scope.contactForm.$setPristine();
          $scope.myContacts = {firstName:"", lastName:""};
        };
}])
;
