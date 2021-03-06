$ ->

  insertEvents = (result, tabletop) ->
    if $("body.event-page").length > 0 || $("body.home").length > 0
      source = $("#events_template").html()
      template = Handlebars.compile(source)
      $("#event-list").html(template(result))

  eventsTable = Tabletop(
    key: "1xe0nnxmyjinDmn25HQwAfP_odHTKx1bwUDNEnxWPVtw"
    proxy: "https://madtree.s3.amazonaws.com/"
    callback: insertEvents)

  currentEvents = []

  isCurrent = (event) ->
    now = new Date()
    now.setDate(now.getDate()-1)
    year = now.getFullYear()
    event_date = "#{event.date}, #{year}"
    if Date.parse(event_date) > Date.parse(now)
      currentEvents.push(event) unless event.title == ""
    else
      return

  Handlebars.registerHelper "listFirstThree", (events, options) ->
    currentEvents = []
    isCurrent(event) for event in events
    ret = ""
    i = 0
    j = 3
    if currentEvents.length > 2
      while i < j
        ret = ret + options.fn(currentEvents[i])
        i++
    else
      while i < currentEvents.length
        ret = ret + options.fn(currentEvents[i])
        i++
    ret

  Handlebars.registerHelper "currentEvents", (events, options) ->
    currentEvents = []
    isCurrent(event) for event in events
    ret = ""
    i = 0
    while i < currentEvents.length
      ret = ret + options.fn(currentEvents[i])
      i++
      console.log ret
    ret

