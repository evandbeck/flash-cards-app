module Api
    module V1
        class CardsController < ApplicationController
            # GET /cards
            def index
                cards = Card.all
                render json: cards
            end
        end
    end
end