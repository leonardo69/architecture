(function () {
    'use strict';
    debugger;    
    angular
        .module ('app.firstModule')
        .component ('firstModuleTest', component());    

    function component() {      
           
        debugger;
        componentController.$inject = ["firstModuleService"];

        function componentController(firstModuleService){
            debugger;
           
            var vm = this;  //jshint ignore:line
           

            vm.$onInit = function(){
                debugger;
                var myData = firstModuleService.getData();
                vm.myData=myData;             
                //console.log(myData);
            };

            vm.$onChange = function(){
                debugger;
            };

            vm.myItemChanged = function(item){
                debugger;
                vm.selectedItem = item;
                console.log(item);
            };

            //when pass function, attention! function attr is IN "func-ty" delimiter-separated style

            vm.testClick = function(val){
                console.log('clicked', val);
            };
        
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: 'firstCtrl',          
            template:'<div style="border:1px solid black">Hello from firstModuleTest component {{firstCtrl.selectedItem}} <br>'+
            '<first-module-combobox data="firstCtrl.myData" func-ty="firstCtrl.testClick(val)" >'+
            '</first-module-combobox><br> <button ng-click="firstCtrl.testClick()">Click</button></div>'
        };
    }
   
} ());