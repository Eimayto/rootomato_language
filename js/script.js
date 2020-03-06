window.onload = function(){
	message.innerHTML = "";
	var file = "https://raw.githubusercontent.com/Eimayto/forcontest/master/download/file"+i+".txt";
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", file, false);
	rawFile.onreadystatechange = function ()
	{
	  if(rawFile.readyState === 4)
	  {
      if(rawFile.status === 200 || rawFile.status == 0)
      {
        var allText = rawFile.responseText;
        body = allText;
      }
      }
	  }
	  rawFile.send(null);
  }
}
