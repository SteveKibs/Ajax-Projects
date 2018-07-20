//stores the reference to the xmlhttprequest object
var xmlHttp = createXmlHttpRequestObject();

// retrieves the XMLHttpRequest object

function createXmlHttpRequestObject() {
	//stores the reference to the XMLHttpRequest object
	var xmlHttp;

	// if running Internet Explorer 6 or older
	if (window.ActiveObject) {
		try {
			xmlHttp = new ActiveObject("Microsoft.XMLHTTP");
		}
		catch (e) {
			xmlHttp = false;
		}
	}
	//if running Mozilla or other browsers
	else {
		try {
			// statements
			xmlHttp = new new XMLHttpRequest();
		} catch(e) {
			// statements
			xmlHttp = false;

			console.log(e);
		}
	}
	// return the created object or display an error message
	if (!xmlHttp) {
		alert("Error creating the new XMLHttpRequest object");
	}
	else {
		return xmlHttp;
	}
	// make asynchronous HTTP request using the xmlhttprequest object
	function process(){
		//proceed only ifthe xmlhttp object isnt busy
		if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0) {
			
		}
	}
}