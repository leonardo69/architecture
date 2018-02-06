(function(){
    'use strict';

    angular
        .module('app.firstModule')
        .factory('firstModuleService', firstModuleService);

    /** @ngInject */
    function firstModuleService(){

        return {
            getData: getData
        };

        function getData(){
            var data = [
                { text: "Black", value: "1" },
                { text: "Orange", value: "2" },
                { text: "Grey", value: "3" }
            ];
            return data;
        }
    }

}());