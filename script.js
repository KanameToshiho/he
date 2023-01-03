(function(){
window.addEventListener('DOMContentLoaded', (event) => {
    score=0;
    time=15;
    ca = document.getElementById("can");
    ca.width = window.innerWidth;
    ca.height = window.innerHeight;
    ctx = ca.getContext("2d");
    nowk = Math.round(Math.random())
    reshe(nowk);
  s = ca.width/6;
setInterval(tdraw,1000);
ctx.fillStyle = "#d8a373";
ctx.fillRect(0,0,ca.width,ca.height/11*2);
ctx.fillStyle = "#e6b422";
ctx.fillRect(15,15,ca.width-30,ca.height/11*2-30);
ctx.fillStyle = "#000000";
dtext(ca.width/2,ca.height/12,s/2,"score:0");
ctx.fillStyle = "#e6b422";
ctx.fillRect(0,ca.height/10*7,ca.width/2,ca.height/10*3);
ctx.fillStyle = "#38b48b";
ctx.fillRect(ca.width/2-1,ca.height/10*7,ca.width/2+1,ca.height/10*3);
ctx.fillStyle = "#FFFFFF";

dtext(ca.width/4,ca.height/10*8.5,s,"ひら");
dtext(ca.width/4*3,ca.height/10*8.5,s,"カタ");
});
function dtext(x,y,size,text){
ctx.beginPath () ;
var fontSize = size ;
ctx.font = "bold " + fontSize + "px Arial, meiryo, sans-serif" ;
var textWidth = ctx.measureText( text ).width ;

ctx.fillText( text, x - (textWidth) / 2, y+fontSize/3 ) ;
}
document.onselectstart = function() {
  return false;
}
function handle(event) {
    event.preventDefault();
}

window.onload = function() {
  flag=false;
  flag_=false;
  document.addEventListener('touchmove', handle, { passive: false });
  document.addEventListener('mousewheel', handle, { passive: false });
  document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });
}
    document.addEventListener("touchstart", () => {
      if(event.touches[0].pageY>=window.innerHeight/10*7){
        if(event.touches[0].pageX<=window.innerWidth/2){flag=!flag;push(1,flag);}else{flag_=!flag_;push(0,flag_);}
      }
    })

    document.addEventListener("touchend", () => {
        if(flag){selk=1;};if(flag_){selk=0;}
        flag=false;flag_=false;push(0,flag_);
        if(selk==nowk){ctx.globalCompositeOperation = "destination-out";ctx.fillStyle="#fef4f4";ctx.fillRect(0,0,ca.width,ca.height/10*7);
          nowk = Math.round(Math.random());
          ctx.globalCompositeOperation = "source-over";
          ctx.fillStyle = "#d8a373";
          ctx.fillRect(0,0,ca.width,ca.height/11*2);
          ctx.fillStyle = "#e6b422";
          ctx.fillRect(15,15,ca.width-30,ca.height/11*2-30);
          reshe(nowk);
          console.log(nowk);
          ctx.fillStyle = "#000000";
          score++;
          dtext(ca.width/2,ca.height/12,s/2,"score:"+score);
        }else{        
          ctx.fillStyle = "#d8a373";
          ctx.fillRect(0,0,ca.width,ca.height/11*2);
          ctx.fillStyle = "#e6b422";
          ctx.fillRect(15,15,ca.width-30,ca.height/11*2-30);
          if(score>=1){score--;}
          ctx.fillStyle = "#000000";
          dtext(ca.width/2,ca.height/12,s/2,"score:"+score);
              ctx.fillStyle = "#38b48b";
        }
      ctx.fillStyle = "#38b48b";
        ctx.beginPath () ;
  ctx.arc( ca.width-ca.height/11,ca.height/12,ca.height/15,0,2*Math.PI ) ;
  ctx.fill() ;
  ctx.strokeStyle = "#5c9291" ;
  ctx.lineWidth = 1 ;
  ctx.stroke() ;
  ctx.fillStyle = "#FFFFFF";
  dtext(ca.width-ca.height/11,ca.height/12,s,time);
 
    })
function push(i,o){
  if(o){
  if(i){
    ctx.fillStyle="#bf794e"; ctx.fillRect(0,ca.height/10*7,ca.width/2,ca.height/10*3);
  } else {ctx.fillStyle="#006e54"; ctx.fillRect(ca.width/2,ca.height/10*7,ca.width/2,ca.height/10*3);}
  
  if(i){
    ctx.fillStyle="#e6b422";dtext(ca.width/4,ca.height/10*8.5,s,"ひら");
  }else{ctx.fillStyle="#38b48b";dtext(ca.width/4*3,ca.height/10*8.5,s,"カタ");}
  } else {
    ctx.fillStyle = "#e6b422";
    ctx.fillRect(0,ca.height/10*7,ca.width/2,ca.height/10*3);
    ctx.fillStyle = "#38b48b";
    ctx.fillRect(ca.width/2-1,ca.height/10*7,ca.width/2+1,ca.height/10*3);
    ctx.fillStyle = "#FFFFFF";
    dtext(ca.width/4,ca.height/10*8.5,s,"ひら");
    dtext(ca.width/4*3,ca.height/10*8.5,s,"カタ");
  }

}
function reshe(i){
ctx.fillStyle = "#000000";
if(i){var str = "へ";}else{var str = "ヘ"}//(1)ひらがな(0)カタカナ  
dtext(ca.width/2,(ca.height/55*27)/2+ca.height/11*2,ca.width/2,str);
}
function tdraw(){
  ctx.fillStyle = "#38b48b";
  ctx.beginPath () ;
  ctx.arc( ca.width-ca.height/11,ca.height/12,ca.height/15,0,2*Math.PI ) ;
  ctx.fill() ;
  ctx.strokeStyle = "#5c9291" ;
  ctx.lineWidth = 1 ;
  ctx.stroke() ;
  ctx.fillStyle = "#FFFFFF";
  dtext(ca.width-ca.height/11,ca.height/12,s,time);
  time--;
  if(time==0){alert("あなたのスコアは"+score+"です");location.reload();}
  
}
}());
