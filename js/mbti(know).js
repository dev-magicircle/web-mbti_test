function enfj(){
    sessionStorage.setItem('result', "ENFJ");
}
function enfp(){
    sessionStorage.setItem('result', "ENFP");
}

function entj(){
    sessionStorage.setItem('result', "ENTJ");
}

function entp(){
    sessionStorage.setItem('result', "ENTP");
}

function esfj(){
    sessionStorage.setItem('result', "ESFJ");
}

function esfp(){
    sessionStorage.setItem('result', "ESFP");
}
function estj(){
    sessionStorage.setItem('result', "ESTJ");
}

function estp(){
    sessionStorage.setItem('result', "ESTP");
}
function infj(){
    sessionStorage.setItem('result', "INFJ");
}
function infp(){
    sessionStorage.setItem('result', "INFP");
}

function intj(){
    sessionStorage.setItem('result', "INTJ");
}

function intp(){
    sessionStorage.setItem('result', "INTP");
}

function isfj(){
    sessionStorage.setItem('result', "ISFJ");
}

function isfp(){
    sessionStorage.setItem('result', "ISFP");
}
function istj(){
    sessionStorage.setItem('result', "ISTJ");
}

function istp(){
    sessionStorage.setItem('result', "ISTP");
}
//mbti계산
window.onload=function (){
    var result=sessionStorage.getItem('result');
    document.getElementById('mbti').innerHTML=result;
    
    if(result=="ENFJ"){
        document.getElementById('img').src="img/enfj.png";
        document.getElementById('text').innerHTML="이 육아서.. 저 육아서.. <br>뭘 믿어야하지…";
    }else if(result=="ENFP"){
        document.getElementById('img').src="img/enfp.png";
        document.getElementById('text').innerHTML="뉸뉴냔나난 <br>나는 행복한 프로육아러 랄라라";
    }else if(result=="ENTJ"){
        document.getElementById('img').src="img/entj.png";
        document.getElementById('text').innerHTML="우리 애기는 클래스가 달라 <br>이 잡것들앙!";
    }else if(result=="ESFJ"){
        document.getElementById('img').src="img/esfj.png";
        document.getElementById('text').innerHTML="아기랑 커플템 100개 사야 <br>직성이 풀림";
    }else if(result=="ENTP"){
        document.getElementById('img').src="img/entp.jpg";
        document.getElementById('text').innerHTML="애기 뭐 꼭 그렇게 <br>열심히 키워야하나? ";
    }else if(result=="ESFP"){
        document.getElementById('img').src="img/esfp.png";
        document.getElementById('text').innerHTML="외출하는데 사람들이 <br>귀엽다고 안하면 서운";
    }else if(result=="ESTJ"){
        document.getElementById('img').src="img/estj.png";
        document.getElementById('text').innerHTML="애정을 가장한 꼰대";
    }else if(result=="ESTP"){
        document.getElementById('img').src="img/estp.png";
        document.getElementById('text').innerHTML="마이웨이 육아";
    }else if(result=="INFJ"){
        document.getElementById('img').src="img/infj.png";
        document.getElementById('text').innerHTML="하앍.. 우리 애기.. <br>세젤귀… 넘귀여워..최고..";
    }else if(result=="INFP"){
        document.getElementById('img').src="img/infp.png";
        document.getElementById('text').innerHTML="다른 엄빠들이랑 <br>꼭 공동육아를 해야해?";
    }else if(result=="INTJ"){
        document.getElementById('img').src="img/intj.png";
        document.getElementById('text').innerHTML="우리 아이 입신양명 시키겠어.";
    }else if(result=="INTP"){
        document.getElementById('img').src="img/intp.png";
        document.getElementById('text').innerHTML="나는 그랬지만, <br>우리 애는 그러면 안된다.";
    }else if(result=="ISFJ"){
        document.getElementById('img').src="img/isfj.png";
        document.getElementById('text').innerHTML="이러면 애기한테 안좋을까? <br>소심소심";
    }else if(result=="ISFP"){
        document.getElementById('img').src="img/isfp.png";
        document.getElementById('text').innerHTML="내가 말하는 대로 해! <br>엄빠말이 진리다!";
    }else if(result=="ISTJ"){
        document.getElementById('img').src="img/istj.png";
        document.getElementById('text').innerHTML="라떼는 안그랬어. 그럼 안돼. <br>이렇게 해.";
    }else if(result=="ISTP"){
        document.getElementById('img').src="img/istp.png";
        document.getElementById('text').innerHTML="우리 애가 마음은 착해요. <br>(feat. 정신승리)";
        
    }}