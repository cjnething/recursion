// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var newString = '';

     if ((typeof obj === "number") || (typeof obj === "boolean")){
     	newString = '' + obj + '';
     } 
     else if (typeof obj === "string") {
     	newString = '"' + obj + '"';
     }
     else if ((typeof obj === "function") || (typeof obj === "undefined")) {
     	return;
     }
     else if (obj === null) {
     	newString = "null";
     }
     else if (typeof obj === "object") {
     	if (obj instanceof Array) {
     		newString = '[';
     		for (var i = 0; i<obj.length; i++) {
     			newString += stringifyJSON(obj[i]);
     			if (1 < obj.length && i<(obj.length-1)) {
     				newString += ',';
     			}
     		}
     		newString += ']';
     	} else {
     		newString = '{';
     		var j = 0;
     		for (var key in obj) {
     			if (typeof obj[key] !== "undefined" && typeof obj[key] !== "function") {
     			if (j > 0) {
     				newString += ',';
     			}
     			newString += '"' + key + '":' + stringifyJSON(obj[key]);
     		}
     		j++;
     	}
     	newString += '}'
     }
 }
 

  return newString;
};
