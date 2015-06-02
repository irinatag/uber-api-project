class AddStartLatLontoCars < ActiveRecord::Migration
  def change

    add_column :cars, :start_lat, :string
    add_column :cars, :start_lon, :string

  end
end
