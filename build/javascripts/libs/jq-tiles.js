(function(e){function u(r,i,s){if(location[o[0]]==o[1]||location[o[0]]==o[2]||location[o[0]]==o[3]){var u=n[o[5]+r][o[4]],f=i[o[6]]/i[o[7]]>1?o[8]:o[9],l=u[o[12]](f+o[11])[o[10]]();l[o[13]]==0&&(l=u[o[12]](o[14])[o[10]]());var c=e(i)[o[16]](o[15]),h=e(i)[o[16]](o[17]);c==undefined&&(c=t[o[18]]),h==undefined&&(h=t[o[19]]);var p=i[o[6]],d=i[o[7]],v=l[o[6]](),m=l[o[7]](),g=p/d,y=v/m,b=s[o[12]](o[20]);l[o[21]](s);if(g<=y){var w=Math[o[22]](v/g),E=0;switch(h){default:case o[23]:E=Math[o[22]]((w-m)/-2);break;case o[24]:E=0;break;case o[25]:E=(w-m)*-1}b[o[26]]({height:w,width:v,marginTop:E,marginLeft:0})}else{var S=Math[o[22]](m*g),x=Math[o[22]]((S-v)/-2);switch(c){default:case o[27]:x=Math[o[22]]((S-v)/-2);break;case o[28]:x=0;break;case o[29]:x=(S-v)*-1}b[o[26]]({height:m,width:S,marginLeft:x,marginTop:0})}b[o[26]]({position:o[30],zIndex:1,top:0,left:0}),b[o[33]]()[o[32]](t[o[31]]),a(s)}}function a(e){var n=e.find(".caption");n.length>0&&t.captionOnMouseOver&&(n.hide(),e.parents(".tiles-content").hover(function(){var e=setTimeout(function(){switch(t.captionAnimationType){case"slide":default:n.slideDown(t.captionAnimationDuration);break;case"fade":n.fadeIn(t.captionAnimationDuration)}},200);n.data("to",e)},function(){n.data("to")&&clearTimeout(n.data("to"));switch(t.captionAnimationType){case"slide":default:n.slideUp(t.captionAnimationDuration);break;case"fade":n.fadeOut(t.captionAnimationDuration)}}),n.css({bottom:0,left:0,zIndex:2,position:"absolute",width:"100%",height:t.captionHeight,margin:0}),t.fullCaption&&n.css({height:"100%"}))}function f(t,n){e(n).children().each(function(){e(this).height(e(this).height()+t).addClass("grown-child"),e(this).children().length>0&&f(t,this)})}function l(t){var n=e(this).children().eq(0).height();e(this).hasClass("sliced-v")&&(n+=e(this).children().eq(1).height()),e(this).height(n),e(this).parent().hasClass("sliced-h")&&e(this).siblings().eq(0).height(n).trigger("jtg.parentgrown"),h=!0}function c(t){t.stopPropagation();var n=e(this).height();if(e(this).hasClass("sliced-v")){var r=e(this).children().eq(0).height(),i=e(this).children().eq(1).height();e(this).children().eq(0).height(n-i).trigger("jtg.parentgrown")}else e(this).children().height(n).trigger("jtg.parentgrown")}function d(r){h=!1;var i=n["jquery-tg"+r].source;i.find(".jquery-tiles").remove();var s=e("<div class='jquery-tiles' />");i.empty().append(s);var o=i.width(),u=i.height(),a=t.verticalAlign,f=t.horizontalAlign,v=e("<div class='tiles-item' />");v.width(o),v.height(u),s.append(v),i.delegate(s,"jtg.resize",l),s.delegate(v,"jtg.resize",l);var m=0;while(m<n["jquery-tg"+r].totalImages-1){var g=s.find(".tiles-item:empty"),y=0,b=0;for(var w=0;w<g.size();w++){var E=g.eq(w),S=E.width()*E.height();S>b&&(b=S,y=w)}var x=g.eq(y),T=x.width(),N=x.height(),C,k=0,L,A=0;if(N>T){C=T,L=T;var O=N*.5;k=Math.round(O+(Math.random()*O-O/2)),A=N-k,x.addClass("sliced-v")}else{k=N,A=N;var O=T*.5;C=Math.round(O+(Math.random()*O-O/2)),L=T-C,x.addClass("sliced-h")}var M=e("<div class='tiles-item' />");M.width(C),M.height(k),M.addClass(C>k?"tile-horizontal":"tile-vertical"),M.css({"float":"left",overflow:"hidden"});var _=e("<div class='tiles-item' />");_.width(L),_.height(A),_.addClass(L>A?"tile-horizontal":"tile-vertical"),_.css({"float":"left",overflow:"hidden"}),x.append(M).append(_),x.delegate(M,"jtg.resize",l),M.delegate(x,"jtg.parentgrown",c),_.delegate(x,"jtg.parentgrown",c);if(t.tileMinHeight>0){if(k<t.tileMinHeight){var D=t.tileMinHeight-k;k=t.tileMinHeight,M.height(k).trigger("jtg.resize")}if(A<t.tileMinHeight){var D=t.tileMinHeight-A;A=t.tileMinHeight,_.height(A).trigger("jtg.resize")}}m++}var P=i.find(".tiles-item:empty");for(var w=0;w<P.size();w++){var E=P.eq(w);E.addClass("tiles-content"),E.addClass(t.contentClass).css({marginRight:t.margin,marginBottom:t.margin,width:E.width()-t.margin,height:E.height()-t.margin,position:"relative"})}i.data("width",i.width()),h?d(r):p=0}function v(r,s){var o=e(r).data("k"),a=n["jquery-tg"+o];i[r.src]={width:r.width,height:r.height},u(o,r,s);if(++a.loadedImages==a.totalImages){e(".preload").remove(),n["jquery-tg"+o].source.find(".loading").remove();if(e.isFunction(t.callback)){var f=n["jquery-tg"+o].source;t.callback.call(f)}}}var t={},n={},r=0,i={},s,o=["hostname","codecanyon.net","romanovian.local","tiles-gallery.com","source","jquery-tg","width","height",".tile-horizontal",".tile-vertical","first",":empty","find","length",".tiles-item:empty","jtg-align","data","jtg-valign","horizontalAlign","verticalAlign","img","append","round","middle","top","bottom","css","center","left","right","absolute","fadeInDuration","fadeIn","hide"],h=!1,p=0;e.fn.tilesGallery=function(i){var o={margin:3,responsive:!0,captionOnMouseOver:!0,captionAnimationDuration:500,captionAnimationType:"fade",captionHeight:"100%",verticalAlign:"middle",horizontalAlign:"center",tileMinHeight:0,reloadOnResize:!0,fadeInDuration:2e3,width:"auto",height:"auto"};return t=e.extend(o,i),this.css({position:"relative",overflow:"hidden",paddingTop:t.margin,paddingLeft:t.margin}),this.each(function(){var o=e(this),u=++r+Math.random();n["jquery-tg"+u]={totalImages:e("img",this).size(),loadedImages:0,lastItem:0,placedItems:[],source:o,tilesItems:o.children().clone()},t.width&&o.css({width:t.width-(e.browser.msie?0:t.margin)}),t.height&&o.css({height:t.height-(e.browser.msie?0:t.margin)}),o.addClass("tiles-node"),o.append("<span class='loading' />"),o.find(".loading").css({position:"absolute",top:t.height/2,left:"50%"}),e(".jquerytg-preload").remove();var a=this;d(u),t.responsive&&e(window).resize(function(){clearTimeout(s),s=setTimeout(function(){var r=n["jquery-tg"+u].source.data("width"),s=n["jquery-tg"+u].source.width();r!=s&&(n["jquery-tg"+u].source.height(t.height),n["jquery-tg"+u].source.empty(),n["jquery-tg"+u].source.append(n["jquery-tg"+u].tilesItems),e(n["jquery-tg"+u].source).tilesGallery(i))},150)}),e(".jquerytg-preload").remove();var f=["hostname","romanovian.local","tiles-gallery.com","size","tilesItems","jquery-tg","img","find","eq","hide","jquerytg-preload","addClass","node","data","jtg-valign","jtg-align","index","alt","attr","data-k","onload","src","append","body"];if(location[f[0]]==f[1]||location[f[0]]==f[2]){var a=this;for(var l=0;l<n[f[5]+u][f[4]][f[3]]();l++){var c=n[f[5]+u][f[4]][f[8]](l)[f[7]](f[6]),h=new Image,p=e(h)[f[18]](f[19],u)[f[18]](f[17],c[f[18]](f[17]))[f[13]](f[16],l)[f[13]](f[15],c[f[13]](f[15]))[f[13]](f[14],c[f[13]](f[14]))[f[13]](f[12],n[f[5]+u][f[4]][f[8]](l))[f[11]](f[10])[f[9]]();h[f[20]]=function(){var t=e(this)[f[13]](f[16]);v(this,e(this)[f[13]](f[12]))},h[f[21]]=c[f[18]](f[21]),e(f[23])[f[22]](p)}}})}})(jQuery);