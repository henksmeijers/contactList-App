'use strict';

angular.module('contactApp')

.constant("baseURL","http://localhost:3000/")
.service('contactService', ['$resource', 'baseURL', function($resource, baseURL){
    this.getContacts = function(){
      return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
    };
    this.getContacts = function () {
      return $resource(baseURL+"feedback/:id", null, {
        'add':{method: 'POST'}});
    };
    
}])
