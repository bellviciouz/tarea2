angular.module('starter.services', [])

.factory('Chats', function($cordovaSQLite,$ionicPopup) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  
  
  
  var chats = [];


return{
    all:function(){
    chats = [];    
    
  $cordovaSQLite.execute(db, 'SELECT * FROM menu ORDER BY id DESC')
            .then(
                function(result) {
 
                    if (result.rows.length > 0) {
                for(var i=0;i<result.rows.length;i++)
			{
			
			chats.push({ 
			    "id":result.rows.item(i).id,
            "nombre":result.rows.item(i).nombre,
			"descripcion":result.rows.item(i).descripcion,
			"precio":result.rows.item(i).precio,
            });
                        }
                    }
                },
                function(error) {
                    statusMessage = "Error on loading: " + error.message;
                }
            );  
    return chats;
    }  
    
    ,
    remove: function(chat){
        $cordovaSQLite.execute(db, "DELETE FROM menu WHERE id = ?", [chat.id])
        .then(function(result){
        statusMessage="Borrado";
        },
        function(error){
         statusMessage="Error "+ error.message;  
        });
        chats.splice(chats.indexOf(chat), 1);
        
    },
    
 get: function(chatId) {
        chats = [];
       $cordovaSQLite.execute(db, "SELECT * FROM menu WHERE id = ?", [chatId])
        .then(function(result){
            
            
            if (result.rows.length > 0) {
               
			chats.push({ "id":result.rows.item(0).id, 
			"nombre":result.rows.item(0).nombre,
			"descripcion":result.rows.item(0).descripcion,
			"precio":result.rows.item(0).precio,
            });
            }
            
    
        },
        function(error){
         statusMessage="Error "+ error.message;  
        });
        
     return chats;
    }
    
};
  
  
  
  
  
  
  
  
  
  
});
