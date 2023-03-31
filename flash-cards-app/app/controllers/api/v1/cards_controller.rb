module Api
    module V1
        class CardsController < ApplicationController
            # GET /cards
            def index
                render json: @card
            end
        end
    end
end