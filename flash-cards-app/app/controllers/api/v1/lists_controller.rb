module Api
    module V1
        class ListsController < ApplicationController
            # GET /lists
            def index
                lists = List.all
                render json: lists
            end
        end
    end
end