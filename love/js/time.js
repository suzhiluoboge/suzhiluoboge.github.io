function NewDate(str) { 
str = str.split('-'); 
var date = new Date(); 
date.setUTCFullYear(str[0], str[1] - 1, str[2]); 
date.setUTCHours(0, 0, 0, 0); 
return date; 
} 
function showsectime() {
var birthDay =NewDate("2023-12-28");
var today=new Date();
var timeold=today.getTime()-birthDay.getTime();
var sectimeold=timeold/1000
var secondsold=Math.floor(sectimeold);
var msPerDay=24*60*60*1000; var e_daysold=timeold/msPerDay;
var daysold=Math.floor(e_daysold);
var e_hrsold=(daysold-e_daysold)*-24;
var hrsold=Math.floor(e_hrsold);
var e_minsold=(hrsold-e_hrsold)*-60;
var minsold=Math.floor((hrsold-e_hrsold)*-60); var seconds=Math.floor((minsold-e_minsold)*-60).toString();

var hand=hrsold-10;
if (hand<0)
{
hand=24+hand;
daysold=daysold-1;
}
document.getElementById("showsectime").innerHTML = "我们相恋了"+daysold+"天"+hand+"小时"+minsold+"分"+seconds+"秒";
setTimeout(showsectime, 1000);
}
