class SessionsController < ApplicationController
  def create
    p "*" * 50
    p auth_hash
    p auth_hash[:credentials][:token]
    user = User.where(uid: auth_hash[:uid], provider: auth_hash[:provider]).first_or_create
    car = Car.last
    session[:user_id] = user.id
    session[:request_token] = auth_hash[:credentials][:token]
    session[:end_lat] = car[:end_lat]
    session[:end_lon] = car[:end_lon]
    session[:start_lat] = car[:start_lat]
    session[:start_lon] = car[:start_lon]
    redirect_to map_path
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end


end
