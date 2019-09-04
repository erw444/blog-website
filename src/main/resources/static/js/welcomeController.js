(function(){
  'use strict';




  let WelcomeController = function($scope){
    var ctrl = this;
    ctrl.testBlogEntries = [
      {
        title: 'Terrors of the Serangetti',
        body: 'Many people believe that the Serangetti is quite dangerous.... but actually, its not because I can\'t spell.'
      },
      {
        title: 'Yet another Entry',
        body: 'Have to keeep moving, persuing, chasing on to my dream of one day having enough blog entries.'
      },
      {
        title: 'Poop Skiddo',
        body: 'Ya know, maybe I should set up unit testing some day?'
      },
      {
        title: 'PFFFFFFFFFFFFFFFFFFFFFFFF',
        body: 'Blargal hargle blah blah blah blah.'
      },
    ]
  }
  WelcomeController.$inject = ['$scope'];
  angular.module('app').controller('WelcomeController', WelcomeController);
})();
