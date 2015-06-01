require 'rest-client'

class MapsController < ApplicationController

  def show
    @uber_cars = (RestClient::Request.execute(
      :method => :get,
      :url => "https://api.uber.com/v1/estimates/price?start_longitude=-122.3968118&end_longitude=-122.429927&start_latitude=37.7877327&end_latitude=37.777570",
      :headers => {'Authorization' => 'Bearer ' + session[:request_token], :content_type => 'application/json'}
      ))

    p @uber_cars

    #set gon variable for js
    gon.uber_cars = @uber_cars
  end

end
