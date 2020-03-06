var dictonary = {};
window.onload = function(){
	message.innerHTML = "";
	var file = "https://raw.githubusercontent.com/Eimayto/rootomato_language/master/Rootomato_Dictionary.txt";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var allText = rawFile.responseText;
			}
		}
		rawFile.send(null);
		var i = 0;
		while(/([^:]+)([^/]+)/.test(allText)){
			var word = /([^:]+)([^/]+)./.exec(body);
			allText = allText.replace(word[0],'');
			dictionary[i][0] = word[1];
			dictionary[i++][1] = word[2];
		}
	}
}
