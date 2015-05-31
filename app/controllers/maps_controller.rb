require 'rest-client'

class MapsController < ApplicationController

  def show
    @uber_cars = (RestClient::Request.execute(
      :method => :get,
      :url => "https://api.uber.com/v1/products?latitude=37.7759792&longitude=-122.41823",
      :headers => {'Authorization' => 'Bearer ' + session[:request_token], :content_type => 'application/json'}
      ))

    p @uber_cars
    
    #set gon variable for js
    gon.uber_cars = @uber_cars
  end

end
