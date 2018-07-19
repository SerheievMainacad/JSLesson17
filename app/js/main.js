document.addEventListener('DOMContentLoaded', function() {
	var ajax = document.getElementById('ajax');

	ajax.onclick = function() {
		var xhr = new XMLHttpRequest();

		//GET, POST, OPTION, PUT, DELETE, HEADER
		//url
		//true/false - async
		// xhr.open('GET', 'data/data.json', true);
		xhr.open('GET', 'http://localhost:2403/collection', true);
		//readyState
		//0 - unsent
		//1 - open
		//2 - sentHeaders
		//3 - loading
		//4 - success
		//JSON.stringify()
		//JSON.parse()
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				//2__ - request
				//3__ - redirect
				//4__ - request error(incorrect url)
				//5__ - server - incorrect server settings (.htaccess)
				if (xhr.status == 200) {
					console.log(xhr.responseText);
					var data = JSON.parse(xhr.responseText);
					console.log(data);
				}
			}
		};

		xhr.send();
	};

	var add = document.getElementById('add');
	add.onclick = function() {
		var xhr = new XMLHttpRequest();
		xhr.open('POST', 'http://localhost:2403/collection');
		var dataToSend = JSON.stringify({ name: 'newGood', price: 2000 });
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log(xhr.responseText);
				}
			}
		};
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send(dataToSend);
	};
	var del = document.getElementById('delete');
	del.onclick = function() {
		var xhr = new XMLHttpRequest();
		id = event.target.parent.getAttribute('data-id');
		xhr.open('DELETE', 'http://localhost:2403/collection/' + id);

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log(xhr.responseText);
				}
			}
		};
		xhr.setRequestHeader('Content-type', 'application/json');
		xhr.send();
	};
});
