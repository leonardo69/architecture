(function () {
    'use strict';
    debugger;
    angular
        .module ('app.secondModule')
        .component ('secondModuleTest', component());
    function component() {
      
        debugger;

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
            template:'<div>Hello from secondModuleTest component </div>'
        };
    }

} ());