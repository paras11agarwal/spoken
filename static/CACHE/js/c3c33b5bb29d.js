$(document).ready(function(){currentVideo=$('.playlist-item.active');nextVideo=currentVideo.next('li');prevVideo=currentVideo.prev('li');var tmpHtml=currentVideo.attr('data')+'/'+$('.video-count').html()
$('.video-count').html(tmpHtml)
if(nextVideo.length){$('.forward').html('<a href="'+nextVideo.children('a').attr('href')+'"><i class="fa fa-1 fa-fast-forward"></i></a>');}else{$('.forward').html('<i class="fa fa-1 fa-fast-forward"></i>');}
if(prevVideo.length){$('.backward').html('<a href="'+prevVideo.children('a').attr('href')+'"><i class="fa fa-1 fa-fast-backward"></i></a>');}else{$('.backward').html('<i class="fa fa-1 fa-fast-backward"></i>');}
$(".fancybox").fancybox({maxWidth:500,maxHeight:485,fitToView:true,autoSize:false,closeClick:false,openEffect:"none",closeEffect:"none",modal:true,});$(".video-show-more").click(function(e){e.preventDefault();$(".video-info").slideToggle("slow");$(this).text($(this).text()=='Show video info'?"Hide video info":"Show video info");});});var player,tag=document.createElement('script'),firstScriptTag=document.getElementsByTagName('script')[0];var flag=false;tag.src="https://www.youtube.com/iframe_api";firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);function onPlaybackQualityChange(event){console.log(event);}
Number.prototype.between=function(min,max){return this>=min&&this<=max;};var ik_player;function onYouTubeIframeAPIReady(){ik_player=new YT.Player('player');ik_player.addEventListener("onReady","onReady");ik_player.addEventListener("onStateChange","onStateChange");}
function formatTime(time){time=Math.round(time);var minutes=Math.floor(time/60),seconds=time-minutes*60;seconds=seconds<10?'0'+seconds:seconds;return minutes+"."+seconds;}
function onReady(event){function logDuration(){window.setTimeout(logDuration,1000);var cur_time=formatTime(ik_player.getCurrentTime()).toString();var duration=formatTime(ik_player.getDuration()).toString();if(parseFloat(cur_time)==parseFloat(duration.toString())){$('.ScrollStyle').find('.question').css("background-color","white");}else{trigger(cur_time,duration);}
return cur_time}
logDuration();$("#text").click(function(e){ik_player.pauseVideo()
setForum(logDuration())});}
function syncAudioVideo(videoId,audioId){videoId=videoId;audioId=audioId;videoObj='#'+videoId;videoWidth=$(videoObj).attr('width');videoHeight=$(videoObj).attr('height');videoParent='#'+videoId+'-avplayer-js';$(videoObj).addClass('avs-tech');$(videoObj).wrap('<div id="'+videoId+'-avplayer-js" class="avplayer-js avs-default-skin avs-paused avs-controls-enabled" style="width: '+videoWidth+'px; height: '+videoHeight+'px;">');$(videoParent).append('<div class="avs-poster avs-hidden" tabindex="-1"></div>');posterImage=$(videoObj).attr('poster');if(posterImage!=undefined){$('.avs-poster').css('background-image','url("'+posterImage+'");');}
var track='<div class="avs-text-track-display"><div class="avs-captions" style="display: block;"><div class="avs-tt-cue"><div id="'+videoId+'-srt" style="display: none; margin: 0px;">';var subOptions='';$(videoObj+' track').each(function(){track+='<div class="srt avs-text-track" id="'+videoId+'-'+$(this).attr('label').toLowerCase()+'" data-video="'+videoId+'" data-srt="'+$(this).attr('src')+'" style="display:none;"></div>';subOptions+='<li id="'+$(this).attr('label')+'" class="'+videoId+'-menu-item avs-menu-item" role="button" aria-live="polite" tabindex="0" aria-selected="false">'+$(this).attr('label')+'</li>';$(this).remove();});track+='</div></div></div></div>';$(videoParent).append(track);$(videoParent).append('<div id="'+videoId+'-loading-spinner" class="avs-loading-spinner avs-hidden"></div>');$(videoParent).append('<button id="'+videoId+'-big-play-button" class="avs-big-play-button" role="button" type="button" aria-live="polite" tabindex="0" aria-label="play video"><span class="avs-control-text">Play Video</span></button>');$(videoParent).append('<div class="avs-control-bar" id="'+videoId+'-control-bar"></div>');playBar=$(videoObj+'-control-bar');$(playBar).append('<button id="'+videoId+'-play-control" class="avs-play-control avs-control avs-button  avs-paused" tabindex="0" role="button" type="button" aria-live="polite"><span class="avs-control-text">Play</span></button>');$(playBar).append('<div class="avs-mute-control avs-volume-menu-button avs-menu-button avs-menu-button-inline avs-control" id="'+videoId+'-mute-control" role="button" aria-live="polite" tabindex="0"><span class="avs-control-text">Mute</span><div class="avs-menu"><div class="avs-menu-content"><div role="slider" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" tabindex="0" id="'+videoId+'-volume-bar" class="avs-volume-bar avs-slider-bar avs-slider avs-slider-horizontal" aria-label="volume level" aria-valuetext="100%"><div class="avs-volume-level" id="'+videoId+'-volume-level" style="width: 100%;"><span class="avs-control-text"></span></div><div class="avs-volume-handle avs-slider-handle" id="'+videoId+'-volume-handle" style="left: 96%;"><span class="avs-control-text">00:00</span></div></div></div></div></div>');$(playBar).append('<div class="avs-progress-control avs-control" id="'+videoId+'-progress-holder"><div role="slider" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" tabindex="0" class="avs-progress-holder avs-slider avs-slider-horizontal" aria-label="video progress bar" aria-valuetext="" style="width: 100%"><div id="'+videoId+'-load-progress" class="avs-load-progress" style="width: 0%;"><span class="avs-control-text">Loaded: 0%</span></div><div class="avs-play-progress avs-slider-bar" style="width: 0%;" id="'+videoId+'-play-progress" data-current-time="00:00"><span class="avs-control-text">Progress: 0%</span></div><div class="avs-seek-handle avs-video-slider-handle" id="'+videoId+'-seek-handle" style="left: 0%;"><span class="avs-control-text">00:00</span></div></div></div>');$(playBar).append('<div class="avs-current-time avs-time-control avs-control"><div class="avs-current-time-display" id="'+videoId+'-current-time-display" aria-live="off">0:00</div></div>');$(playBar).append('<div class="avs-time-divider"><span>/</span></div>');$(playBar).append('<div class="avs-duration avs-time-control avs-control"><div class="avs-duration-display" id="'+videoId+'-duration-display" aria-live="off">0:00</div></div>');$(playBar).append('<div class="avs-remaining-time avs-time-control avs-control"><div id="'+videoId+'-remaining-time-display" class="avs-remaining-time-display" aria-live="off"><span class="avs-control-text">Remaining Time </span>-0:00</div></div>');subMenu='<div class="avs-captions-button avs-menu-button avs-control avs-workinghover avs-menu-button-popup" role="button" aria-live="polite" tabindex="0" aria-haspopup="true"><div class="avs-control-content"><span class="avs-control-text">Captions</span></div><div class="avs-menu"><ul class="avs-menu-content">';subMenu+='<li class="'+videoId+'-menu-item avs-menu-item avs-selected" id="'+videoId+'-srt-off" role="button" aria-live="polite" tabindex="0" aria-selected="true">Caption off</li>';subMenu+=subOptions;subMenu+='</ul></div></div>';$(playBar).append(subMenu);$(playBar).append('<div class="avs-fullscreen-control avs-control " id="'+videoId+'-fullscreen-control" role="button" aria-live="polite" tabindex="0"><div class="avs-control-content"><span class="avs-control-text">Fullscreen</span></div></div>');new bigPlayButton(videoObj,videoId,audioId);}
function trigger(cur_time,duration){min_range='00-01'
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
$("#"+'42').prependTo("#forum_Q");div.style.backgroundColor="#cdcdcd";}else{div.style.backgroundColor="#ffffff";}}
new syncAudioVideo('video1','audio1');var trackedPlayer=videojs('st_video');var previousTime=0;var currentTime=0;trackedPlayer.on('timeupdate',function(){previousTime=currentTime;currentTime=trackedPlayer.currentTime();var cur_time=formatTime(currentTime).toString();trigger(cur_time);$("#text").click(function(e){trackedPlayer.pause()
setForum(cur_time)});});function setForum(cur_time)
{var time_split=cur_time.split(".")
var minute=parseFloat(time_split[0]);var min_range=minute+"-"+(minute+parseFloat(1))
if(parseInt(time_split[1]).between(parseInt(0),parseInt(9))){sec_range="0-10"}else if(parseFloat(time_split[1]).between(parseFloat(10),parseFloat(19))){sec_range="10-20"}else if(parseFloat(time_split[1]).between(parseFloat(20),parseFloat(29))){sec_range="20-30"}else if(parseFloat(time_split[1]).between(parseFloat(30),parseFloat(39))){sec_range="30-40"}else if(parseFloat(time_split[1]).between(parseFloat(40),parseFloat(49))){sec_range="40-50"}else{sec_range="50-60"}
var url="http://forums.spoken-tutorial.org/new-question/?category=Java&tutorial=Getting started java Installation&minute_range="+min_range+"&second_range="+sec_range;$("#text").attr("href",url);}