!function(){$(function(){var e,t,a,n,i,o,d,r,s,l;if("placeholder"in document.createElement("input")||$("input[placeholder]").each(function(){var e;return e=$(this).attr("placeholder"),""===this.value&&(this.value=e),$(this).focus(function(){return this.value===e?this.value="":void 0}).blur(function(){return""===$.trim(this.value)?this.value=e:void 0})}),$("form").submit(function(){return $(this).find("input[placeholder]").each(function(){return this.value===$(this).attr("placeholder")?this.value="":void 0})}),i=function(e){var t,a,n,i,o,d,r,s;for(s=e.length,n=0,t=document.getElementById("tweets"),a="";s>n;)i=$(""+e[n]+" p.tweet")[1].innerHTML,o=$($(""+e[n]+" p.tweet")[0].innerHTML),d=o[0].href,r=o.children("span:last-child")[0].innerHTML,a+="<div class='tweet'>",a+="<div class='tweet-content'><p>"+i+"</p></div>",a+="<cite class='tweet-source'><a href='"+d+"'>"+r+"</a></cite>",a+="</div>",n++;return t.innerHTML=a},$("body.home").length>0&&twitterFetcher.fetch("397202470268452864","tweets",5,!0,!0,!1,"default",!1,i,!1),n=new Instafeed({get:"tagged",tagName:"madtreebrewing",target:"instagram-photos",limit:"32",resolution:"standard_resolution",clientId:"6add59c8eadf4ca0a4f718bfda1e3699",template:'<li class="photo"><a href="{{link}}" data-toggle="modal" data-target="#myModal{{id}}"><img src={{image}} /></a><div class="modal fade" id="myModal{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModal{{id}}" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button></div><div class="modal-body"><img src="{{image}}" /></div></div></div></div></li>'}),$("body.home").length>0&&n.run(),$(".founder a").click(function(e){var t;return e.preventDefault(),t=$(this).data("target"),$(".founder-info.active").removeClass("active"),$(t).addClass("active"),$(".founder").removeClass("active"),$(this).closest(".founder").addClass("active")}),$("#map-canvas").storeLocator({dataType:"json",dataLocation:"/data/stores.json",callbackSuccess:function(){return $(".find-beer").addClass("showing-results")}}),$(".find-beer h2").fitText(.66),$(".beer-details h2").fitText(.75),$(".nav-toggle").click(function(e){return e.preventDefault(),$(".main-nav").toggleClass("gone"),$(".main-nav").toggleClass("expanded")}),e=$(".main-nav .active a").data("children"),$(".section-navbar").data("group")===e&&(t=$(".section-navbar").clone().addClass("cloned"),$(".main-nav > .active").append(t)),$(".main-nav .active > a").click(function(e){return e.preventDefault(),$(this).children(".icon-caret-right").length>0?$(this).children(".icon-caret-right").removeClass("icon-caret-right").addClass("icon-caret-down"):$(this).children(".icon-caret-down").removeClass("icon-caret-down").addClass("icon-caret-right"),$(this).siblings(".section-navbar").children(".navbar-inner").children(".section-nav").toggleClass("showing")}),r=function(e,t){var a,n;return a=new google.maps.Geocoder,n=new google.maps.LatLng(e,t),a.geocode({latLng:n},function(e,t){return t===google.maps.GeocoderStatus.OK&&e[1]?$("#address").val(e[0].formatted_address):void 0})},o=0,d=0,l=function(e){return o=e.coords.latitude,d=e.coords.longitude,$("#user-location").addClass("can-geolocate"),r(o,d)},a=function(){},$("body.home").length>0){if(!geoPosition.init())return;geoPosition.getCurrentPosition(l,a,{enableHighAccuracy:!0})}return s=function(e,t){var a,n,i,o,d,r;return r=new google.maps.LatLng(e,t),o={zoom:16,center:r,mapTypeId:google.maps.MapTypeId.ROADMAP},i=new google.maps.Map(document.getElementById("taproom-map"),o),a='<div class="info-window">        <div class="loc-name">MadTree Brewing</span></div>        <div>5164 Kennedy Ave.<br /> Cincinnati, OH 45213</div>        <div>513-836-8733</div>      </div>',n=new google.maps.InfoWindow({content:a}),d=new google.maps.Marker({position:r,map:i,title:"MadTree Brewery"}),n.open(i,d)},$("body.taproom").length>0?s(39.166675,-84.420144):void 0})}.call(this);