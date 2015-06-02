require 'rest-client'

class MapsController < ApplicationController

  def show
    @uber_cars = (RestClient::Request.execute(
      :method => :get,
      :url => "https://api.uber.com/v1/estimates/price?start_longitude=#{start_lon}&end_longitude=#{end_lon}&start_latitude=#{start_lat}&end_latitude=#{end_lat}",
      :headers => {'Authorization' => 'Bearer ' + session[:request_token], :content_type => 'application/json'}
      ))

    p @uber_cars

    #set gon variable for js
    gon.uber_cars = @uber_cars
  end

  private

  def start_lon
    session[:start_lon]
  end

  def end_lon
    session[:end_lon]
  end

  def start_lat
    session[:start_lat]
  end

  def end_lat
    session[:end_lat]
  end

end
