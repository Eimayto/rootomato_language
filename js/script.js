var dic = [["캜","섭씨"],["팛","화씨"],["간딘단","간단"],["무료","무려"],["광대","관대"],["디ㅗㅋ","디코"],["잃",1],["읺",2],["삶",3],["삲",4],["옳",5],["윣",6],["칡",7],["팕",8],["굵",9],["싮",10],["밹",100],["춹",1000],["많",10000],["~하도로규","~하도록"],["나이","아니"],["잔깐","잠깐"],["짜릴","빨리"],["배놔","내봐"],["ㅓㅇ보","정보"],["카촉","카톡"],["벼롤","별로"],["토지아","퇴장"],["해듐","~해둠"],["똫같다","똑같다"],["외춌다","외쳤다"],["핵","책"],["국서","국어"],["족므","조금"],["할교","학교"],["탄어","단어"],["ㄲ고","꼭"],["라이브버리","라이브러리"],["냄세","냄새"],["구겨긴","구겨진"],["gb","휴"],["~하자마나","~하자마자"],["tabe","table"],["있따","있다"],["가테고리","카테고리"],["탸","야"],["항삭","항상"]];
var dft = [["캜","섭씨"],["팛","화씨"],["간딘단","간단"],["무료","무려"],["광대","관대"],["디ㅗㅋ","디코"],["도로규","도록"],["나이","아니"],["잔깐","잠깐"],["짜릴","빨리"],["배놔","내봐"],["ㅓㅇ보","정보"],["카촉","카톡"],["벼롤","별로"],["토지아","퇴장"],["듐","둠"],["똫","똑"],["외춌다","외쳤다"],["핵","책"],["국서","국어"],["족므","조금"],["할교","학교"],["탄어","단어"],["ㄲ고","꼭"],["라이브버리","라이브러리"],["냄세","냄새"],["구겨긴","구겨진"],["gb","휴"],["~하자마나","~하자마자"],["tabe","table"],["있따","있다"],["가테고리","카테고리"],["탸","야"],["항삭","항상"]];

function trans(){
	var message = document.getElementById('input').value;
	for(var i = 0; i < dft.length; i++){
		while(new RegExp(dft[i][1]).test(message)){
			message = message.replace(dft[i][1],dft[i][0]);
		}
	}
	document.getElementById('output').value = message;
	return 0;
}

function paste(){
	var t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = document.getElementById('output').value;
	t.select();
	document.execCommand('copy');
	document.body.removeChild(t);
}

window.onload = function(){
	var print = "<table border='1'><tr><th>루토마토어</th><th>한국어</th></tr>";
	for(var i = 0; i < dic.length; i++){
		print = print+"<tr><th>"+String(dic[i][0])+"</th><th>"+String(dic[i][1])+"</th></tr>";
	}
	print = print+"</table>";
	document.getElementById('table').innerHTML = print;
}
