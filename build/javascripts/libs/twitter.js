function dateFormatter(e){return e.toTimeString()}function handleTweets(e){for(var t=e.length,n=0,s=document.getElementById("example4"),i="<ul>";t>n;)i+="<li>"+e[n]+"</li>",n++;i+="</ul>",s.innerHTML=i}var twitterFetcher=function(){function e(e){return e.replace(/<b[^>]*>(.*?)<\/b>/gi,function(e,t){return t}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function t(e,t){for(var n=[],s=RegExp("(^| )"+t+"( |$)"),i=e.getElementsByTagName("*"),a=0,l=i.length;l>a;a++)s.test(i[a].className)&&n.push(i[a]);return n}var n="",s=20,i=!0,a=[],l=!1,r=!0,c=!0,o=null,p=!0,d=!0,u=null,h=!0;return{fetch:function(e,t,p,m,g,w,f,v,y,T){void 0===p&&(p=20),void 0===m&&(i=!0),void 0===g&&(g=!0),void 0===w&&(w=!0),void 0===f&&(f="default"),void 0===v&&(v=!0),void 0===y&&(y=null),void 0===T&&(T=!0),l?a.push({id:e,domId:t,maxTweets:p,enableLinks:m,showUser:g,showTime:w,dateFunction:f,showRt:v,customCallback:y,showInteraction:T}):(l=!0,n=t,s=p,i=m,c=g,r=w,d=v,o=f,u=y,h=T,t=document.createElement("script"),t.type="text/javascript",t.src="//cdn.syndication.twimg.com/widgets/timelines/"+e+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(t))},callback:function(m){var g=document.createElement("div");g.innerHTML=m.body,"undefined"==typeof g.getElementsByClassName&&(p=!1),m=[];var w=[],f=[],v=[],y=[],T=0;if(p)for(g=g.getElementsByClassName("tweet");T<g.length;)0<g[T].getElementsByClassName("retweet-credit").length?v.push(!0):v.push(!1),(!v[T]||v[T]&&d)&&(m.push(g[T].getElementsByClassName("e-entry-title")[0]),y.push(g[T].getAttribute("data-tweet-id")),w.push(g[T].getElementsByClassName("p-author")[0]),f.push(g[T].getElementsByClassName("dt-updated")[0])),T++;else for(g=t(g,"tweet");T<g.length;)m.push(t(g[T],"e-entry-title")[0]),y.push(g[T].getAttribute("data-tweet-id")),w.push(t(g[T],"p-author")[0]),f.push(t(g[T],"dt-updated")[0]),0<t(g[T],"retweet-credit").length?v.push(!0):v.push(!1),T++;for(m.length>s&&(m.splice(s,m.length-s),w.splice(s,w.length-s),f.splice(s,f.length-s),v.splice(s,v.length-s)),g=[],T=m.length,v=0;T>v;){if("string"!=typeof o){var b=new Date(f[v].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),b=o(b);if(f[v].setAttribute("aria-label",b),m[v].innerText)if(p)f[v].innerText=b;else{var x=document.createElement("p"),C=document.createTextNode(b);x.appendChild(C),x.setAttribute("aria-label",b),f[v]=x}else f[v].textContent=b}b="",i?(c&&(b+='<div class="user">'+e(w[v].innerHTML)+"</div>"),b+='<p class="tweet">'+e(m[v].innerHTML)+"</p>",r&&(b+='<p class="timePosted">'+f[v].getAttribute("aria-label")+"</p>")):m[v].innerText?(c&&(b+='<p class="user">'+w[v].innerText+"</p>"),b+='<p class="tweet">'+m[v].innerText+"</p>",r&&(b+='<p class="timePosted">'+f[v].innerText+"</p>")):(c&&(b+='<p class="user">'+w[v].textContent+"</p>"),b+='<p class="tweet">'+m[v].textContent+"</p>",r&&(b+='<p class="timePosted">'+f[v].textContent+"</p>")),h&&(b+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+y[v]+'" class="twitter_reply_icon">Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+y[v]+'" class="twitter_retweet_icon">Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+y[v]+'" class="twitter_fav_icon">Favorite</a></p>'),g.push(b),v++}if(null==u){for(m=g.length,w=0,f=document.getElementById(n),y="<ul>";m>w;)y+="<li>"+g[w]+"</li>",w++;f.innerHTML=y+"</ul>"}else u(g);l=!1,0<a.length&&(twitterFetcher.fetch(a[0].id,a[0].domId,a[0].maxTweets,a[0].enableLinks,a[0].showUser,a[0].showTime,a[0].dateFunction,a[0].showRt,a[0].customCallback,a[0].showInteraction),a.splice(0,1))}}}();