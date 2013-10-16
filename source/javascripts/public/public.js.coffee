$ ->

    # Make sure older browsers support the HTML5 Placeholder Attribute
    unless "placeholder" of document.createElement("input")
      $("input[placeholder]").each ->
        val = $(this).attr("placeholder")
        @value = val  if @value is ""
        $(this).focus(->
          @value = ""  if @value is val
        ).blur ->
          @value = val  if $.trim(@value) is ""

    # Clear default placeholder values on form submit
    $("form").submit ->
      $(this).find("input[placeholder]").each ->
        @value = ""  if @value is $(this).attr("placeholder")

    handleTweets = (tweets) ->
      x = tweets.length
      n = 0
      element = document.getElementById("tweets")
      html = ""

      while n < x
        tweetText = $("#{tweets[n]} p.tweet")[1].innerHTML
        tweetUser = $($("#{tweets[n]} p.tweet")[0].innerHTML)
        tweetUserLink = tweetUser[0].href
        tweetUsername = tweetUser.children("span:last-child")[0].innerHTML
        html += "<div class='tweet'>"
        html += "<div class='tweet-content'><p>#{tweetText}</p></div>"
        html += "<cite class='tweet-source'><a href='#{tweetUserLink}'>#{tweetUsername}</a></cite>"
        html += "</div>"
        n++
      element.innerHTML = html

    
    twitterFetcher.fetch('385564659522097152', 'tweets', 3, true, true, false, 'default', false, handleTweets, false) if $("body.index").length > 0
    
      
    feed = new Instafeed(
      get: "tagged"
      tagName: "awesome"
      target: "#instagram-photos" 
      clientId: "6add59c8eadf4ca0a4f718bfda1e3699"
      template: '<li class="photo"><a href="{{link}}"><img src="{{image}}" /></a></li>'
      )
    feed.run() if $("body.index").length > 0

    $(".founder a").click (e) ->
      e.preventDefault()
      target = $(this).data("target")
      $(".founder-info.active").removeClass("active")
      $(target).addClass("active")

