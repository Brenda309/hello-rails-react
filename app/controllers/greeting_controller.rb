class GreetingController < ApplicationController
def index
    render json: { greeting: Greeting.all.sample.greeting }, status: :ok
end
end
