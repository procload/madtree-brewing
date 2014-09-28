require 'untappd'
require 'json'


desc "This task is called by the Heroku scheduler add-on"
task :update_untappd do
  puts "Updating Untappd..."

  Untappd.configure do |config|
    config.client_id = '2977D98B3AA0DB9846E5D71F619E36A1E67D5F01'
    config.client_secret = '445B3550C7D39BE441A45B3FDFB2E4723F08FD52'
    config.gmt_offset = -5
  end

  brewery = Untappd::Brewery.info(16735)

  json = JSON.generate brewery.brewery

  File.open("build/untappd.json","w") do |f|
    f.write(json)
  end
  puts "done."
end

task :build do
  puts "## Building site"
  system "bundle exec middleman build"
end

# MadTree Staging and Production URLs
production_url = "https://madtreebrewing.com/"
staging_url = "https://madtree-staging.herokuapp.com/"

# Deploys to Heroku Staging
multitask :heroku_staging do
  puts "## Pushing to Github"
  system "git push origin develop"
  puts "## Deploying to Staging"
  puts "\n## Pushing to #{staging_url}"
  system "git push staging develop:master"
end

# Deploys to Heroku Production
multitask :heroku_production do
  puts "## Deploying to Production"
  puts "\n## Pushing to #{production_url}"
  system "git push production master"
end

namespace :staging do
  desc "Push source to Heroku staging and build"
    task :deploy => [:heroku_staging] do
  end
end

namespace :production do
  desc "Push source to Heroku production and build"
    task :deploy => [:heroku_production] do
  end
end

namespace :assets do
  task :precompile do
    sh "bundle exec middleman build"
  end
end

