class CarsController < ApplicationController

  def index
    @car = Car.new
    @cars = Car.all
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      render json: @car
    else
      render json: @car.errors, status: :unprocessable_entity
    end
  end

  private

  def car_params
    params.require(:car).permit(:name, :distance, :estimate, :high_estimate, :low_estimate, :duration, :surge_multiplier, :currency_code, :end_lat, :end_lon)
  end

end
