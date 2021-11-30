ActiveRecord::Schema.define(version: 2021_11_30_171254) do

  create_table "podcasts", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "genre"
    t.string "thumbnail"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_podcasts", force: :cascade do |t|
    t.integer "user_id"
    t.integer "podcast_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
