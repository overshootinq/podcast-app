class CreatePodcasts < ActiveRecord::Migration[6.1]
  def change
    create_table :podcasts do |t|
      t.string :name
      t.string :description
      t.string :genre
      t.string :thumbnail

      t.timestamps
    end
  end
end
