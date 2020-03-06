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
		
	}
}
