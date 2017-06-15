(function(){new syncAudioVideo('video1','audio1');var vid=document.getElementById('video1');alert(vid.currentTime());})();var ct=document.getElementById('video1');var currentTime=ct.currentTime;var cur_time=formatTime(currentTime).toString();trigger(cur_time);setForum(cur_time);min_range='00-01'
sec_range='0-10'
id='459'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('459');if((parseFloat(cur_time)).between(parseFloat(lower.toString()),parseFloat(upper.toString())))
{bgColor=$("#"+'459').css('background-color')
if($("#"+'459').css("background-color")=="rgb(205, 205, 205)"){}else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'459').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}else{div.style.backgroundColor="#ffffff";}
min_range='00-01'
sec_range='0-10'
id='317'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('317');if((parseFloat(cur_time)).between(parseFloat(lower.toString()),parseFloat(upper.toString())))
{bgColor=$("#"+'317').css('background-color')
if($("#"+'317').css("background-color")=="rgb(205, 205, 205)"){}else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'317').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}else{div.style.backgroundColor="#ffffff";}
min_range='00-01'
sec_range='0-10'
id='42'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('42');if((parseFloat(cur_time)).between(parseFloat(lower.toString()),parseFloat(upper.toString())))
{bgColor=$("#"+'42').css('background-color')
if($("#"+'42').css("background-color")=="rgb(205, 205, 205)"){}else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'42').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}else{div.style.backgroundColor="#ffffff";}
var time_split=cur_time.split(".")
var minute=parseFloat(time_split[0]);var min_range=minute+"-"+(minute+parseFloat(1))
if(parseInt(time_split[1]).between(parseInt(0),parseInt(9))){sec_range="0-10"}else if(parseFloat(time_split[1]).between(parseFloat(10),parseFloat(19))){sec_range="10-20"}else if(parseFloat(time_split[1]).between(parseFloat(20),parseFloat(29))){sec_range="20-30"}else if(parseFloat(time_split[1]).between(parseFloat(30),parseFloat(39))){sec_range="30-40"}else if(parseFloat(time_split[1]).between(parseFloat(40),parseFloat(49))){sec_range="40-50"}else{sec_range="50-60"}
var url="http://forums.spoken-tutorial.org/new-question/?category=Java&tutorial=Getting started java Installation&minute_range="+min_range+"&second_range="+sec_range;$("#text").attr("href",url);