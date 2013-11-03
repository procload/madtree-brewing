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
      tagName: "madtreebrewing"
      target: "instagram-photos" 
      limit: "32"
      resolution: "standard_resolution"
      clientId: "6add59c8eadf4ca0a4f718bfda1e3699"
      template: '<li class="photo"><a href="{{link}}"><img src="{{image}}" /></a><div class="insta-modal"><a href="#" class="close-modal"><i class="icon-remove"></i></a><div class="insta-content"><img src="{{image}}" /></div></div></li>'
      )
    feed.run() if $("body.index").length > 0

    $(".founder a").click (e) ->
      e.preventDefault()
      target = $(this).data("target")
      $(".founder-info.active").removeClass("active")
      $(target).addClass("active")

    $("#instagram-photos").on "click", ".photo a", (e) ->
      e.preventDefault()
      $(this).siblings(".insta-modal").addClass("insta-modal-show")
      $(".insta-modal-overlay").addClass("insta-modal-show")

    $("#instagram-photos").on "click", ".close-modal", (e) ->
      e.preventDefault()
      $(".insta-modal").removeClass("insta-modal-show")
      $(".insta-modal-overlay").removeClass("insta-modal-show")

    $("#map-canvas").storeLocator
      dataType: "json"
      dataLocation: "/data/stores.json"
      callbackSuccess: ->
        $(".find-beer").addClass("showing-results")


    $(".find-beer h2").fitText(.66)

    $(".beer-details h2").fitText(.75)

    $(".nav-toggle").click (e) ->
      e.preventDefault()
      $(".main-nav").toggleClass("expanded")

    activeGroup = $(".main-nav .active a").data("children")
    if $(".section-navbar").data("group") == activeGroup
      copiedNav = $(".section-navbar").clone()
      $(".main-nav .active").append(copiedNav)

    $(".main-nav .active > a").click (e) ->
      e.preventDefault()
      if $(this).children(".icon-caret-right").length > 0
        $(this).children(".icon-caret-right").removeClass("icon-caret-right").addClass("icon-caret-down")
      else
        $(this).children(".icon-caret-down").removeClass("icon-caret-down").addClass("icon-caret-right")

      $(this).siblings(".section-navbar").children(".navbar-inner").children(".section-nav").toggleClass("showing")

    reverseGeocode = (lat, long) ->
      geocoder = new google.maps.Geocoder()
      latlng = new google.maps.LatLng(lat, long)
      geocoder.geocode
        latLng: latlng
      , (results, status) ->
        if status is google.maps.GeocoderStatus.OK
          if results[1]
            $("#address").val(results[0].formatted_address)
          else
           return 
        else
          return

    latitude = 0;
    longitude = 0;
    success_callback = (p) ->
      latitude = p.coords.latitude
      longitude = p.coords.longitude
      $("#user-location").addClass("can-geolocate")
      reverseGeocode(latitude,longitude)
      
    error_callback = (p) ->

    if geoPosition.init() # Geolocation Initialisation
      geoPosition.getCurrentPosition success_callback, error_callback,
        enableHighAccuracy: true
    else
      return

    $("#loc-list").on "click", ".show-on-map", (e) ->
      e.preventDefault()
      $("#map").addClass("now-showing")

    showTaproom = (long, lat) ->
      myLatlng = new google.maps.LatLng(long, lat)
      mapOptions =
        zoom: 16
        center: myLatlng
        mapTypeId: google.maps.MapTypeId.ROADMAP

      map = new google.maps.Map(document.getElementById("taproom-map"), mapOptions)
      contentString = '<div class="info-window">
        <div class="loc-name">MadTree Brewing</span></div>
        <div>5164 Kennedy Ave.<br /> Cincinnati, OH 45213</div>
        <div>513-836-8733</div>
      </div>'
      
      infowindow = new google.maps.InfoWindow(content: contentString)

      marker = new google.maps.Marker(
        position: myLatlng
        map: map
        title: "Hello World!"
      )
      infowindow.open map, marker

      

    if $("body.taproom").length > 0
      showTaproom(39.166675, -84.420144)
