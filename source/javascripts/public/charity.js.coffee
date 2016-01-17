$ ->
  date = new Date()
  current_month = date.getMonth()
  previous_months = []
  next_month = ""
  this_month = ""

  $.getJSON "/data/charity.json", (result) ->
    console.log result
    monthly_partners = result[4].monthly_partners
    for month in monthly_partners
      if month.month_number <= (current_month + 1)
        if month.month_number == (current_month + 1)
         next_month = month
        if month.month_number < current_month
          previous_months.push month
        if month.month_number == current_month
          this_month = month

    charity_data =
      month_name: this_month.name
      current_partner_image: this_month.image
      next_partner_image: next_month.image
      previous_months: previous_months
    source = $("#current_charity_template").html()
    template = Handlebars.compile(source)
    $("#current-and-next").html(template(charity_data))
