class PodcastSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :genre, :thumbnail
end
