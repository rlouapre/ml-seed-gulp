
/*================================================================
=>                   Provider = mlClient
==================================================================*/
/*global app*/

app.provider('mlClient', function () {

	'use strict';


	this.name = 'Default';
 
    this.$get = function () {
	    var self = this;
	    return {
	        sayHello: function () {
	            return 'Hello, ' + self.name + '!';
	        }
	    };
	};
 
    this.setName = function (name) {
        this.name = name;
    };

});


// app.config(function(mlClient){
//     mlClient.setName('Hello World');
// });



/*-----  End of Provider = mlClient  ------*/