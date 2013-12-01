require 'untappd'
require 'json'
desc "This task is called by the Heroku scheduler add-on"
task :update_untappd => :environment do
  puts "Updating Untappd..."

  Untappd.configure do |config|
    config.client_id = '2977D98B3AA0DB9846E5D71F619E36A1E67D5F01'
    config.client_secret = '445B3550C7D39BE441A45B3FDFB2E4723F08FD52'
    config.gmt_offset = -5
  end

  brewery = Untappd::Brewery.info(16735)

  json = JSON.generate brewery.brewery

  File.open("untappd.json","w") do |f|
    f.write(json)
  end
  puts "done."
end


