class PodcastsController < ApplicationController
    def index
        render json: Podcast.all
    end
    
    def show
        render json: Podcast.find(params[:id])
    end
end
