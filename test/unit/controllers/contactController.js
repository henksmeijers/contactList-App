describe('Controller: MenuController', function () {

  // load the controller's module
  beforeEach(module('contactApp'));
  beforeEach(module(function ($urlRouterProvider) {
    $urlRouterProvider.otherwise(function(){return false;});
}));

  var contacController, scope, $httpBackend;

  // Initialize the controller and a mock scope
 beforeEach(inject(function ($controller, _$httpBackend_,  $rootScope, menuFactory) {

         // place here mocked dependencies
     $httpBackend = _$httpBackend_;

     $httpBackend.expectGET("http://localhost:3000/dishes").respond([
       {
     "id": 0,
     "firstName": "Mikias",
     "lastName":"Haile"
     },
     {
     "id": 1,
     "firstname": "John",
     "comments":"Max"
     }
     ]);

   scope = $rootScope.$new();
   contactController = $controller('contactController', {
     $scope: scope, contactSer: contactService
   });
           $httpBackend.flush();

 }));


  //unit tests


  it('should have the correct data order in the contacts', function() {

      expect(scope.contacts[0].firstname).toBe("Mikias");
      expect(scope.contacts[1].lastName).toBe("Max");

  });



});
