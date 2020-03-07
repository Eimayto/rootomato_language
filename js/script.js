var dic = [["캜","섭씨"],["팛","화씨"],["간딘단","간단"],["무료","무려"],["광대","관대"],["디ㅗㅋ","디코"],["잃",1],["읺",2],["삶",3],["삲",4],["옳",5],["윣",6],["칡",7],["팕",8],["굵",9],["싮",10],["밹",100],["춹",1000],["많",10000],["~하도로규","~하도록"],["나이","아니"],["잔깐","잠깐"],["짜릴","빨리"],["배놔","내봐"],["ㅓㅇ보","정보"],["카촉","카톡"],["벼롤","별로"],["토지아","퇴장"],["~해듐","~해둠"],["똫같다","똑같다"],["외춌다","외쳤다"],["핵","책"],["국서","국어"],["족므","조금"],["할교","학교"],["탄어","단어"],["ㄲ고","꼭"],["라이브버리","라이브러리"],["냄세","냄새"],["구겨긴","구겨진"],["gb","휴"],["~하자마나","~하자마자"],["tabe","table"],["있따","있다"],["가테고리","카테고리"]];

function translate(){
	var message = document.getElementById('input').value;
	for(var i = 0; i < dic.length; i++){
		while(new RegExp(dic[i][1]).test(message)){
			message = message.replace(dic[i][1],dic[i][0]);
		}
	}
	document.getElementById('input').innerHTML = message;
}

window.onload = function(){
	var print = "<table border='1'>";
	for(var i = 0; i < dic.length; i++){
		print = print+"<tr><th>"+String(dic[i][0])+"</th><th>"+String(dic[i][1])+"</th></tr>";
	}
	print = print+"</table>";
	document.getElementById('table').innerHTML = print;
	translate();
}
