angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$cordovaSQLite) {
    
    
    
    
   $scope.guardar = function(menu) {


  
        $cordovaSQLite.execute(db, 'INSERT INTO menu (nombre,descripcion,precio) VALUES (?,?,?)', [menu.nombre,menu.descripcion,menu.precio])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
         
     
   }
    
    
    
    
    
    
    
    
    
    
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});




    $scope.chats = Chats.all();
    
    
    $scope.getAll = function()
  {
      $scope.chats = Chats.all();
  };
  
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };











})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $cordovaSQLite) {
  //$scope.chat = Chats.get($stateParams.chatId);
 $scope.menu = Chats.get($stateParams.chatId);
 
 
   $scope.guardar=function(menu){
       $cordovaSQLite.execute(db, 'UPDATE menu SET nombre=?, descripcion=?,precio=? WHERE id=?', [menu.nombre,menu.descripcion,menu.precio,menu.id])
        .then(function(result) {
            $scope.statusMessage = "Registro guardado";
        }, function(error) {
            $scope.statusMessage = "Error: " + error.message;
        })
  }
 
 
 
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
