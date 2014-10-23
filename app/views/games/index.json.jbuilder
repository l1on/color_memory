json.array!(@games) do |game|
  json.extract! game, :id, :name, :email, :score
  json.url game_url(game, format: :json)
end
