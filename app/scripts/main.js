'use strict';
var app = angular.module('Calculator', []);

app.service('MathService', function() {
    this.add = function(a, b) { return a + b };
    
    this.subtract = function(a, b) { return a - b };
    
    this.multiply = function(a, b) { return a * b };
    
    this.divide = function(a, b) { return a / b };
});

app.controller('calculatorsController', function($scope, MathService) {

    $scope.doSum= function() {
        $scope.answer = MathService.add($scope.number1,$scope.number2);
    }

    $scope.doDifference = function() {
        $scope.answer = MathService.subtract($scope.number1,$scope.number2);
    }

    $scope.doMultiplication = function() {
        $scope.answer = MathService.multiply($scope.number1,$scope.number2);
    }

    $scope.doDivision = function() {
        $scope.answer = MathService.divide($scope.number1,$scope.number2);
    }
});