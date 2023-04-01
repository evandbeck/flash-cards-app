module Api
    module V1
        class ListsController < ApplicationController
            # GET /lists
            def index
                lists = List.all
                render json: lists
            end

            # GET /lists/1
            def show
                render json: @list
            end

            # POST /lists
            def create
                list = List.new(list_params)

                if list.save
                    render json: list, status: :created, location: list
                else
                    render json: list.errors, status: :unprocessable_entity
                end
            end

        end
    end
end