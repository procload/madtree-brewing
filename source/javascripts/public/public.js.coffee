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

    #$(window).bind "load", ->
      #rowTotal = $("#instagram-photos li").length

    feed = new Instafeed(
      get: "tagged"
      tagName: "madtreebrewing"
      target: "instagram-photos" 
      limit: "20"
      resolution: "standard_resolution"
      clientId: "6add59c8eadf4ca0a4f718bfda1e3699"
      template: '<li class="photo"><a href="{{link}}" data-toggle="modal" data-target="#myModal{{id}}"><img src={{image}} /></a><div class="modal fade" id="myModal{{id}}" tabindex="-1" role="dialog" aria-labelledby="myModal{{id}}" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button></div><div class="modal-body"><img src="{{image}}" /></div></div></div></div></li>'
      )

    feed.run() if $("body.home").length > 0

    loadBtn = $(".btn-load-more")

    loadBtn.click (e) ->
      e.preventDefault();
      feed.next();

    $(".employee__header > a").click (e) ->
      e.preventDefault()
      $this = $(this)
      $header = $($this.closest(".employee__header"))
      $header.next().slideDown("50")


    $("#map-canvas").storeLocator
      dataType: "json"
      dataLocation: "/data/stores.json"
      callbackSuccess: ->
        $(".find-beer").addClass("showing-results")


    $(".find-beer h2").fitText(.66)

    $(".beer-details h2").fitText(.75)

    $(".nav-toggle").click (e) ->
      e.preventDefault()
      $(".main-nav").toggleClass("gone")
      $(".main-nav").toggleClass("expanded")

    activeGroup = $(".main-nav .active a").data("children")
    if $(".section-navbar").data("group") == activeGroup
      copiedNav = $(".section-navbar").clone().addClass("cloned")
      $(".main-nav > .active").append(copiedNav)


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


    $("#user-location #address").focus ->
      if geoPosition.init() # Geolocation Initialisation
        geoPosition.getCurrentPosition success_callback, error_callback,
          enableHighAccuracy: true
      else
        return

    #$("#loc-list").on "click", ".show-on-map", (e) ->
      #e.preventDefault()
      #$("#map").addClass("now-showing")

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
        title: "MadTree Brewery"
      )
      infowindow.open map, marker

      

    if $("body.taproom").length > 0
      showTaproom(39.166675, -84.420144)

    untappdData =
      client_id: "2977D98B3AA0DB9846E5D71F619E36A1E67D5F01",
      client_secret: "445B3550C7D39BE441A45B3FDFB2E4723F08FD52"

    $.getJSON "/untappd.json", (result) ->
      untappd = 
        beerCount: result.beer_count
        breweryRating: result.rating.rating_score
        totalBeers: result.stats.total_count
        monthlyBeers: result.stats.monthly_count
        weeklyBeers: result.stats.weekly_count
        whosDrinking: result.checkins.items.slice(0,5)
      if $("body.home").length > 0
        source = $("#untappd_template").html()
        template = Handlebars.compile(source)
        $("#untappd").html(template(untappd))

