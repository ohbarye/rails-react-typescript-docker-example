class GreetingsController < ApplicationController
  def hello
    render json: { content: 'Hello from Rails' }
  end
end
