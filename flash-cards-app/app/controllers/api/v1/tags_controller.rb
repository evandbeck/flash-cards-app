module Api
    module V1
        class TagsController < ApplicationController
            # GET /tags
            def index
                tags = Tag.all
                render json: tags
            end

            # GET /tags/1
            def show
                render json: @tag
            end

            # POST /tags
            def create
                tag = Tag.new(tag_params)

                if tag.save
                    render json: tag, status: :created, location: tag
                else
                    render json: tag.errors, status: :unprocessable_entity
                end
            end

        end
    end
end