class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  around_filter :catch_exceptions

  private

  def current_user
    @current_user ||= User.find_by_id!(session[:user_id]) if session[:user_id]
  end

  def catch_exceptions
    yield
  rescue => exception
    if exception.is_a?(RestClient::UnprocessableEntity)
      render_page_not_found
    else
      render_error
    end
  end

  def render_page_not_found
    render :template => 'shared/404.html', :status => 404
  end

  def render_error
    render :template => 'shared/500.html', :status => 500
  end

  helper_method :current_user

end
