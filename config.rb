###
# Compass
###

# Susy grids in Compass
# First: gem install susy
require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###---------------------------------------------------- Helper Methods

helpers do

  def copyright_years(start_year)
    end_year = Date.today.year
    if start_year == end_year
      start_year.to_s
    else
      start_year.to_s + '-' + end_year.to_s
    end
  end

end
#
data.beers.details.each do |beer|
  proxy "/beer/#{beer[:url]}/index.html", "/beer/template.html", :locals => { :beer => beer }, :ignore => true
end

data.community.founders.details.each do |founder|
  proxy "/community/#{founder[:url]}/index.html", "/community/template.html", :locals => { :founder => founder}, :ignore => true
end

data.community.artists.details.each do |artist|
  proxy "/community/#{artist[:url]}/index.html", "/community/template.html", :locals => { :artist => artist}, :ignore => true
end

data.community.partners.details.each do |partner|
  proxy "/community/#{partner[:url]}/index.html", "/community/template.html", :locals => { :partner => partner }, :ignore => true
end

data.community.charities.details.each do |charity|
  proxy "/community/#{charity[:url]}/index.html", "/community/template.html", :locals => { :charity => charity}, :ignore => true
end
# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Activate live reload
activate :livereload

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
