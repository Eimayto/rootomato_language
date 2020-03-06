var dic = [["캜","섭씨"],["팛","화씨"],["간딘단","간단"],["무료","무려"],["광대","관대"],["디ㅗㅋ","디코"],["잃",1],["읺",2],["삶",3],["삲",4],["옳",5],["윣",6],["칡",7],["팕",8],["굵",9],["싮",10],["밹",100],["춹",1000]];
window.onload = function(){
	var print = "<table border='1'>";
	for(var i = 0; i < dic.length; i++){
		print = print+"<tr><th>"+String(dic[i][0])+"</th><th>"+String(dic[i][1])+"</th></tr>";
	}
	print = print+"</table>";
	alert(dic);
	alert(print);
	document.getElementById('table').innerHTML = print;
}
