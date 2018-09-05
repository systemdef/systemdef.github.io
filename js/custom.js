/*

	Name: Epoch
	
	Type: Coming Soon Template
	Author: Orbmob
	Version: 1.0

*/







/*====================================================


	Table of Contents
	
	
		01. Loading Screen 
		
		02. Sliders 
		
			+Image Slider 
		
		03. Lightbox 
		
		04. Countdown Timer 
		
		* Uncompressed Version is Inside The Main Download File*
	
====================================================*/



jQuery(document).ready(function(a){"use strict";setTimeout(function(){a("body").addClass("loaded"),a("h1").css("color","#222222")},0),a(".rslides").responsiveSlides({auto:!0,speed:500,timeout:4e3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:function(){},after:function(){}}),lightbox.option({resizeDuration:200,wrapAround:!0});var b="March 26, 2016 3:26:16";a(".countdown.simple").countdown({date:b}),a(".countdown.styled").countdown({date:b,render:function(b){a(this.el).html("<div>"+this.leadingZeros(b.days,3)+" <span>days</span></div><div>"+this.leadingZeros(b.hours,2)+" <span>hours</span></div><div>"+this.leadingZeros(b.min,2)+" <span>mins</span></div><div>"+this.leadingZeros(b.sec,2)+" <span>secs</span></div>")}}),a(".countdown.callback").countdown({date:+new Date+1e4,render:function(b){a(this.el).text(this.leadingZeros(b.sec,2)+" sec")},onEnd:function(){a(this.el).addClass("ended")}}).on("click",function(){a(this).removeClass("ended").data("countdown").update(+new Date+1e4).start()});var c=(new Date).getTime()+15e3,d=new Date,e=new Date(d.getTime()-5434),f=e.getTime()-d.getTime(),g=f/1e3|0,h=[];h.push("Server time: "+d.toDateString()+" "+d.toTimeString()),h.push("Your time: "+e.toDateString()+" "+e.toTimeString()),h.push("Time difference: "+g+" seconds ("+f+" milliseconds to be precise). Your time is a bit behind."),a(".offset-notice").html(h.join("<br />")),a(".offset-server .countdown").countdown({date:c,offset:1e3*g,onEnd:function(){a(this.el).addClass("ended")}}),a(".offset-client .countdown").countdown({date:c,onEnd:function(){a(this.el).addClass("ended")}})});