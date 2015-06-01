class AddEndLatLontoCarModel < ActiveRecord::Migration
  def change

      add_column :cars, :end_lat, :string
      add_column :cars, :end_lon, :string

  end
end
