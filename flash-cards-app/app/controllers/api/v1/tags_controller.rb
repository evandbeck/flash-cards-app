module Api
    module V1
        class TagsController < ApplicationController
            # GET /tags
            def index
                tags = Tag.all
                render json: tags
            end
        end
    end
end