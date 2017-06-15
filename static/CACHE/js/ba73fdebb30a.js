function report(language){var audi=document.getElementById('audio1');var auid=document.getElementById('audio');var vid=document.getElementById('video1');alert($('#video1 track')[0]);auid.setAttribute("src","/media/videos/10/273/Getting-started-java-Installation-"+language+".mp3");vid.pause();audi.pause();vid.load();audi.load();vid.play();audi.play();}
(function(){new syncAudioVideo('video1','audio1');var vid=document.getElementById('video1');})();$(document).ready(function()
{currentVideo=$('.playlist-item.active');nextVideo=currentVideo.next('li');prevVideo=currentVideo.prev('li');var tmpHtml=currentVideo.attr('data')+'/'+$('.video-count').html()
$('.video-count').html(tmpHtml)
if(nextVideo.length)
{$('.forward').html('<a href="'+nextVideo.children('a').attr('href')+'"><i class="fa fa-1 fa-fast-forward"></i></a>');}
else
{$('.forward').html('<i class="fa fa-1 fa-fast-forward"></i>');}
if(prevVideo.length)
{$('.backward').html('<a href="'+prevVideo.children('a').attr('href')+'"><i class="fa fa-1 fa-fast-backward"></i></a>');}
else
{$('.backward').html('<i class="fa fa-1 fa-fast-backward"></i>');}
$(".fancybox").fancybox({maxWidth:500,maxHeight:485,fitToView:true,autoSize:false,closeClick:false,openEffect:"none",closeEffect:"none",modal:true,});$(".video-show-more").click(function(e){e.preventDefault();$(".video-info").slideToggle("slow");$(this).text($(this).text()=='Show video info'?"Hide video info":"Show video info");});});var player,tag=document.createElement('script'),firstScriptTag=document.getElementsByTagName('script')[0];var flag=false;tag.src="https://www.youtube.com/iframe_api";firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);function onPlaybackQualityChange(event)
{console.log(event);}
Number.prototype.between=function(min,max)
{return this>=min&&this<=max;};var ik_player;function onYouTubeIframeAPIReady()
{ik_player=new YT.Player('player');ik_player.addEventListener("onReady","onReady");ik_player.addEventListener("onStateChange","onStateChange");}
function formatTime(time)
{time=Math.round(time);var minutes=Math.floor(time/60),seconds=time-minutes*60;seconds=seconds<10?'0'+seconds:seconds;return minutes+"."+seconds;}
function trigger(cur_time){min_range='00-01'
sec_range='0-10'
id='459'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('459');if((parseFloat(cur_time))>=parseFloat(lower.toString())&&(parseFloat(cur_time))<(parseFloat(upper.toString())))
{bgColor=$("#"+'459').css('background-color')
if($("#"+'459').css("background-color")=="rgb(205, 205, 205)")
{}
else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'459').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}
else{div.style.backgroundColor="#ffffff";}
min_range='00-01'
sec_range='0-10'
id='317'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('317');if((parseFloat(cur_time))>=parseFloat(lower.toString())&&(parseFloat(cur_time))<(parseFloat(upper.toString())))
{bgColor=$("#"+'317').css('background-color')
if($("#"+'317').css("background-color")=="rgb(205, 205, 205)")
{}
else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'317').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}
else{div.style.backgroundColor="#ffffff";}
min_range='00-01'
sec_range='0-10'
id='42'
min_split=min_range.split("-")
sec_split=sec_range.split("-")
lower=min_split[0]+"."+sec_split[0];upper=min_split[1]+"."+sec_split[1];var div=document.getElementById('42');if((parseFloat(cur_time))>=parseFloat(lower.toString())&&(parseFloat(cur_time))<(parseFloat(upper.toString())))
{bgColor=$("#"+'42').css('background-color')
if($("#"+'42').css("background-color")=="rgb(205, 205, 205)")
{}
else{var el=document.getElementById('forums_Q');el.scrollTop=0;}
$("#"+'42').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}
else{div.style.backgroundColor="#ffffff";}}
var trackedPlayer=document.getElementById('video1');var currentTime=trackedPlayer.currentTime;var cur_time=formatTime(currentTime).toString();trigger(cur_time);window.setInterval(function(){trigger(formatTime(trackedPlayer.currentTime).toString());},1000);$("#text").click(function(e){var trackaudio=document.getElementById('audio1');var trackedvideo=document.getElementById('video1');var currentTime=trackedvideo.currentTime;var cur_time=formatTime(currentTime).toString();trackaudio.pause();trackedvideo.pause();setForum(cur_time);});function setForum(cur_time)
{var time_split=cur_time.split(".")
var minute=parseFloat(time_split[0]);var min_range=minute+"-"+(minute+parseFloat(1))
if(parseInt(time_split[1]).between(parseInt(0),parseInt(9))){sec_range="0-10"}else if(parseFloat(time_split[1]).between(parseFloat(10),parseFloat(19))){sec_range="10-20"}else if(parseFloat(time_split[1]).between(parseFloat(20),parseFloat(29))){sec_range="20-30"}else if(parseFloat(time_split[1]).between(parseFloat(30),parseFloat(39))){sec_range="30-40"}else if(parseFloat(time_split[1]).between(parseFloat(40),parseFloat(49))){sec_range="40-50"}else{sec_range="50-60"}
var url="http://forums.spoken-tutorial.org/new-question/?category=Java&tutorial=Getting started java Installation&minute_range="+min_range+"&second_range="+sec_range;$("#text").attr("href",url);}