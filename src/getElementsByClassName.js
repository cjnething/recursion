// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var nodeArr = [];

	function checkNodes(location) {
       if (location.classList.contains(className)) {
       	 nodeArr.push(location);
       }
       for (var i = 0; i<location.children.length; i++) {
       	checkNodes(location.children[i]);
       }
	};

    checkNodes(document.body);
	return nodeArr;
};