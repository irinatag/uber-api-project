class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def uber
    # You need to implement the method below in your model (e.g. app/models/user.rb)
    @user = User.from_omniauth(auth_hash)

    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Uber") if is_navigational_format?
    else
      redirect_to map_path
    end

    # if user is successfully logged in on uber
  end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end
end
