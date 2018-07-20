function HelloWorld() {
	this.message = 'Hello, world';
	this.sayMessage = function() {
		window.alert(this.message);
	};
}