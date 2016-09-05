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
    var baseURL='http://lorempixel.com/960/450/';
    $scope.myInterval = 5000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    var slides = $scope.slides = [];
    var currIndex = 0;

    $scope.addSlide = function() {
      var newWidth = 600 + slides.length + 1;
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

    for (var i = 0; i < 4; i++) {
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

    // http://stackoverflow.com/questions/962802#962890
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

  //   $scope.slides = [
  //  {
  //        title:'7 Ways to stay Fit',
  //        image:baseURL+'sports/',
  //        text:'Play a sport for 30 minutes a day!'
  //  },
  //  {
  //        title:'Healthly Food',
  //        image:baseURL+'food/',
  //        text:'Food that you should be eating!'
  //  },
  //  {
  //        title:'Relaxing Holidays',
  //        image:baseURL+'nature/',
  //        text:'10 Locations for Nature Lovers!'
  //  }
   //
  //   ];
  }]);
