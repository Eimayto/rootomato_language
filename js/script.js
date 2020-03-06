var dic = {};
window.onload = function(){
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
			var word = /([^:]+)([^/]+)./.exec(allText);
			allText = allText.replace(word[0],'');
			dic[i][0] = word[1];
			dic[i++][1] = word[2];
		}
		var print = "<table border='1'>";
		for(var i = 0; i < dic.length; i++){
			print = print+"<tr><th>"+String(dic[i][0])+"</th><th>"+String(dic[i][1])+"</th></tr>";
		}
		print = print+"</table>";
		alert(dic);
		alert(print);
		document.getElementById('table').innerHTML = print;
	}
}
