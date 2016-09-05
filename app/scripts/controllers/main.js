'use strict';

/**
 * @ngdoc function
 * @name upToApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the upToApp
 */
angular.module('upToApp')
    .controller('MainCtrl', ['$scope', function ($scope) {
    var baseURL='http://lorempixel.com/200/200/';
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
      var newWidth = 700 + slides.length + 1;
      slides.push({
        image: '//unsplash.it/' + newWidth + '/300',
        text: ['Play a sport for 30 minutes a day!','Food that you should be eating!','That is so cool','10 Locations for Nature Lovers!'][slides.length % 4],
        id: currIndex++
      });
    };
    $scope.randomize = function() {
      var indexes = generateIndexesArray();
      assignNewIndexesToSlides(indexes);
    };
    for (var i = 0; i < 10; i++) {
      $scope.addSlide();
    }
    // Randomize logic below
    function assignNewIndexesToSlides(indexes) {
      for (var i = 0, l = slides.length; i < l; i++) {
        slides[i].id = indexes.pop();
      }
    }
    function generateIndexesArray() {
      var indexes = [];
      for (var i = 0; i < currIndex; ++i) {
        indexes[i] = i;
      }
      return shuffle(indexes);
    }
    function shuffle(array) {
      var tmp, current, top = array.length;

      if (top) {
        while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
        }
      }
      return array;
    }
    
    $scope.content=[
        {
           img:baseURL+'people',
           title:'About Us',
           summary:'We are good, we are the best out there'
        },
        {
           img:baseURL+'business',
           title:'Our Services',
           summary:'We offer advice on staying Healthly, what to eat...what are the best exercises for you etc.'
        },
        {

           img:baseURL+'transport',
           title:'Contact Us',
           summary:'#111, Good Health Blvd, Happy Place, Antartica, Zip-432167'
        }
        ]
  }]);
