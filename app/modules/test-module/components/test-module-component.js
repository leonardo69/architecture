(function () {
    'use strict';
    angular
        .module ('app.testModule')
        .component ('testModuleComponent', component());
    function component() {
        
        //this component know bussiness logic 
        //directives return values to this component

        function componentController(){
            var vm = this; 
            var name = "Sany";

            vm.sayHello = function(){
                alert('Hello, '+ name);
            };
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: 'testComponent',
            templateUrl:'./app/modules/test-module/templates/test-module-component.tmpl.html'
        };
    }

} ());