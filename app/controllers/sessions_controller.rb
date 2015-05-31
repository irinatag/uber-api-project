class SessionsController < ApplicationController
  def create
    p "*" * 50
    p auth_hash
    p auth_hash[:credentials][:token]
    user = User.where(uid: auth_hash[:uid], provider: auth_hash[:provider]).first_or_create
    session[:user_id] = user.id
    session[:request_token] = auth_hash[:credentials][:token]
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
