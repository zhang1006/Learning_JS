function get_previousSibling(n) {
	var y=n.previousSibling;
	while (y.nodeType!=1) {
  		y=y.previousSibling;
  	}
	return y;
}
function get_nextSibling(n) {
	var y=n.nextSibling;
	while (y.nodeType!=1) {
  		y=y.nextSibling;
  	}
	return y;
}
function get_lastChild(n) {
	var y=n.lastChild;
	while (y.nodeType!=1) {
  		y=y.previousSibling;
  	}
	return y;
}
function get_firstChild(n) {
	var y=n.firstChild;
	while (y.nodeType!=1) {
  		y=y.nextSibling;
  	}
	return y;
}

// Trim() , Ltrim() , RTrim()  
String.prototype.Trim = function(){   
return this.replace(/(^\s*)|(\s*$)/g, "");  //以字符串开头或以字符串结尾 
}   
String.prototype.LTrim = function(){   
return this.replace(/(^\s*)/g, "");   //以字符串开头
}   
String.prototype.RTrim = function() {   
return this.replace(/(\s*$)/g, "");   //以字符串结尾
}  