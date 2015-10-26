angular.module('starter.services', [])

.factory('Chats', function($cordovaSQLite) {
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
			
			chats.push({ "nombre":result.rows.item(i).nombre,
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
};
  
  
  
  
  
  
  
  
  
  
});
