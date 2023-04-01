module Api
    module V1
        class CardsController < ApplicationController
            # GET /cards
            def index
                cards = Card.all
                render json: cards
            end

            # GET /cards/1
            def show
                render json: @card
            end

            # POST /cards
            def create
                card = Card.new(card_params)

                if card.save
                    render json: card, status: :created, location: card
                else
                    render json: card.errors, status: :unprocessable_entity
                end
            end

        end
    end
end