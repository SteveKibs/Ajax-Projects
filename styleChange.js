var sc = {
	init:function() {
		sc.head = document.getElementsByTagName("h3")[0];
		if (!sc.head) {
			return;
		}
		sc.ad = DOMhelp.closestSibling(sc.head, 1);
		sc.ad.style.display = 'none';
		var t = DOMhelp.getText(sc.head)
	}
}