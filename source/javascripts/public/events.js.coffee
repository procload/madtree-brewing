$ ->
  $.getJSON "/data/events.json", (result) ->
    if $("body.home").length > 0
      source = $("#events_template").html()
      template = Handlebars.compile(source)
      $("#event-list").html(template(result))

  currentEvents = []

  isCurrent = (event) ->
    now = new Date()
    year = now.getFullYear()
    event_date = "#{event.date}, #{year}"
    #if Date.parse(event_date) > Date.parse(now)
    currentEvents.push(event) unless event.title == ""
    #else
    # return

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
